(function() {var implementors = {};
implementors["wasmedge_sys"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Compiler.html\" title=\"struct wasmedge_sys::Compiler\">Compiler</a>","synthetic":true,"types":["wasmedge_sys::compiler::Compiler"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Config.html\" title=\"struct wasmedge_sys::Config\">Config</a>","synthetic":true,"types":["wasmedge_sys::config::Config"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.WasmEdgeError.html\" title=\"enum wasmedge_sys::error::WasmEdgeError\">WasmEdgeError</a>","synthetic":true,"types":["wasmedge_sys::error::WasmEdgeError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.FuncError.html\" title=\"enum wasmedge_sys::error::FuncError\">FuncError</a>","synthetic":true,"types":["wasmedge_sys::error::FuncError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.MemError.html\" title=\"enum wasmedge_sys::error::MemError\">MemError</a>","synthetic":true,"types":["wasmedge_sys::error::MemError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.GlobalError.html\" title=\"enum wasmedge_sys::error::GlobalError\">GlobalError</a>","synthetic":true,"types":["wasmedge_sys::error::GlobalError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.TableError.html\" title=\"enum wasmedge_sys::error::TableError\">TableError</a>","synthetic":true,"types":["wasmedge_sys::error::TableError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.ImportError.html\" title=\"enum wasmedge_sys::error::ImportError\">ImportError</a>","synthetic":true,"types":["wasmedge_sys::error::ImportError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.ExportError.html\" title=\"enum wasmedge_sys::error::ExportError\">ExportError</a>","synthetic":true,"types":["wasmedge_sys::error::ExportError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.InstanceError.html\" title=\"enum wasmedge_sys::error::InstanceError\">InstanceError</a>","synthetic":true,"types":["wasmedge_sys::error::InstanceError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.StoreError.html\" title=\"enum wasmedge_sys::error::StoreError\">StoreError</a>","synthetic":true,"types":["wasmedge_sys::error::StoreError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.VmError.html\" title=\"enum wasmedge_sys::error::VmError\">VmError</a>","synthetic":true,"types":["wasmedge_sys::error::VmError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.CoreError.html\" title=\"enum wasmedge_sys::error::CoreError\">CoreError</a>","synthetic":true,"types":["wasmedge_sys::error::CoreError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.CoreCommonError.html\" title=\"enum wasmedge_sys::error::CoreCommonError\">CoreCommonError</a>","synthetic":true,"types":["wasmedge_sys::error::CoreCommonError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.CoreLoadError.html\" title=\"enum wasmedge_sys::error::CoreLoadError\">CoreLoadError</a>","synthetic":true,"types":["wasmedge_sys::error::CoreLoadError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.CoreValidationError.html\" title=\"enum wasmedge_sys::error::CoreValidationError\">CoreValidationError</a>","synthetic":true,"types":["wasmedge_sys::error::CoreValidationError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.CoreInstantiationError.html\" title=\"enum wasmedge_sys::error::CoreInstantiationError\">CoreInstantiationError</a>","synthetic":true,"types":["wasmedge_sys::error::CoreInstantiationError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/error/enum.CoreExecutionError.html\" title=\"enum wasmedge_sys::error::CoreExecutionError\">CoreExecutionError</a>","synthetic":true,"types":["wasmedge_sys::error::CoreExecutionError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Executor.html\" title=\"struct wasmedge_sys::Executor\">Executor</a>","synthetic":true,"types":["wasmedge_sys::executor::Executor"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.ImportObject.html\" title=\"struct wasmedge_sys::ImportObject\">ImportObject</a>","synthetic":true,"types":["wasmedge_sys::import_obj::ImportObject"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Function.html\" title=\"struct wasmedge_sys::Function\">Function</a>","synthetic":true,"types":["wasmedge_sys::instance::function::Function"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.FuncType.html\" title=\"struct wasmedge_sys::FuncType\">FuncType</a>","synthetic":true,"types":["wasmedge_sys::instance::function::FuncType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.GlobalType.html\" title=\"struct wasmedge_sys::GlobalType\">GlobalType</a>","synthetic":true,"types":["wasmedge_sys::instance::global::GlobalType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Global.html\" title=\"struct wasmedge_sys::Global\">Global</a>","synthetic":true,"types":["wasmedge_sys::instance::global::Global"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Memory.html\" title=\"struct wasmedge_sys::Memory\">Memory</a>","synthetic":true,"types":["wasmedge_sys::instance::memory::Memory"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.MemType.html\" title=\"struct wasmedge_sys::MemType\">MemType</a>","synthetic":true,"types":["wasmedge_sys::instance::memory::MemType"]},{"text":"impl&lt;'store&gt; Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Instance.html\" title=\"struct wasmedge_sys::Instance\">Instance</a>&lt;'store&gt;","synthetic":true,"types":["wasmedge_sys::instance::module::Instance"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Table.html\" title=\"struct wasmedge_sys::Table\">Table</a>","synthetic":true,"types":["wasmedge_sys::instance::table::Table"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.TableType.html\" title=\"struct wasmedge_sys::TableType\">TableType</a>","synthetic":true,"types":["wasmedge_sys::instance::table::TableType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Loader.html\" title=\"struct wasmedge_sys::Loader\">Loader</a>","synthetic":true,"types":["wasmedge_sys::loader::Loader"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Module.html\" title=\"struct wasmedge_sys::Module\">Module</a>","synthetic":true,"types":["wasmedge_sys::module::Module"]},{"text":"impl&lt;'module&gt; Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Import.html\" title=\"struct wasmedge_sys::Import\">Import</a>&lt;'module&gt;","synthetic":true,"types":["wasmedge_sys::module::Import"]},{"text":"impl&lt;'module&gt; Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Export.html\" title=\"struct wasmedge_sys::Export\">Export</a>&lt;'module&gt;","synthetic":true,"types":["wasmedge_sys::module::Export"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Statistics.html\" title=\"struct wasmedge_sys::Statistics\">Statistics</a>","synthetic":true,"types":["wasmedge_sys::statistics::Statistics"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Store.html\" title=\"struct wasmedge_sys::Store\">Store</a>","synthetic":true,"types":["wasmedge_sys::store::Store"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/enum.RefType.html\" title=\"enum wasmedge_sys::RefType\">RefType</a>","synthetic":true,"types":["wasmedge_sys::types::RefType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/enum.ValType.html\" title=\"enum wasmedge_sys::ValType\">ValType</a>","synthetic":true,"types":["wasmedge_sys::types::ValType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/enum.Mutability.html\" title=\"enum wasmedge_sys::Mutability\">Mutability</a>","synthetic":true,"types":["wasmedge_sys::types::Mutability"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/enum.CompilerOptimizationLevel.html\" title=\"enum wasmedge_sys::CompilerOptimizationLevel\">CompilerOptimizationLevel</a>","synthetic":true,"types":["wasmedge_sys::types::CompilerOptimizationLevel"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/enum.CompilerOutputFormat.html\" title=\"enum wasmedge_sys::CompilerOutputFormat\">CompilerOutputFormat</a>","synthetic":true,"types":["wasmedge_sys::types::CompilerOutputFormat"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/types/enum.HostRegistration.html\" title=\"enum wasmedge_sys::types::HostRegistration\">HostRegistration</a>","synthetic":true,"types":["wasmedge_sys::types::HostRegistration"]},{"text":"impl Freeze for <a class=\"enum\" href=\"wasmedge_sys/enum.ExternalType.html\" title=\"enum wasmedge_sys::ExternalType\">ExternalType</a>","synthetic":true,"types":["wasmedge_sys::types::ExternalType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.WasmValue.html\" title=\"struct wasmedge_sys::WasmValue\">WasmValue</a>","synthetic":true,"types":["wasmedge_sys::types::WasmValue"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Validator.html\" title=\"struct wasmedge_sys::Validator\">Validator</a>","synthetic":true,"types":["wasmedge_sys::validator::Validator"]},{"text":"impl Freeze for <a class=\"struct\" href=\"wasmedge_sys/struct.Vm.html\" title=\"struct wasmedge_sys::Vm\">Vm</a>","synthetic":true,"types":["wasmedge_sys::vm::Vm"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()