%global gittag 0.9.1
Name:    wasmedge
Version: 0.9.1
Release: 1%{?dist}
Summary: High performance WebAssembly Virtual Machine
License: ASL 2.0
URL:     https://github.com/WasmEdge/WasmEdge
Source0: https://github.com/WasmEdge/WasmEdge/releases/download/%{gittag}/WasmEdge-%{version}-src.tar.gz
BuildRequires: gcc-c++,cmake,ninja-build,boost-devel,spdlog-devel,llvm13-devel,lld13-devel
Requires:      llvm13
ExclusiveArch: x86_64 aarch64

%description
High performance WebAssembly Virtual Machine

%package devel
#Requires:
Summary: WasmEdge development files
Provides: wasmedge-devel

%description devel
This package contains necessary header files for WasmEdge development.

%package lib
#Requires:
Summary: WasmEdge library
Requires: llvm13
Provides: wasmedge-lib

%description lib
This package contains necessary library files for WasmEdge development.

%prep
%autosetup -n wasmedge
sed -i -e 's@0.0.0-unreleased@%{gittag}@' CMakeLists.txt include/CMakeLists.txt

%build
mkdir build
cd build
cmake -GNinja -DCMAKE_BUILD_TYPE=RelWithDebInfo -DWASMEDGE_BUILD_TESTS=OFF -DLLVM_DIR=%{_libdir}/llvm13/lib/cmake/llvm -DCMAKE_INSTALL_PREFIX=%{_prefix} ..
cmake --build .

%install
cd build
DESTDIR=%{buildroot} cmake --build . --target install

%files
%{_bindir}/*

%files devel
%{_includedir}/*

%files lib
%{_libdir}/*

%changelog
* Thu Feb 10 2022 hydai@secondstate.io - 0.9.1-1
- 0.9.1 Release
* Thu Dec 09 2021 hydai@secondstate.io - 0.9.0-1
- 0.9.0 Release
