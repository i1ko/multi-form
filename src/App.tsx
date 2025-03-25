import './App.css'
import ProgressIndicator from "./components/common/ProgressIndicator.tsx";
import Step1CountrySelect from "./components/steps/Step1CountrySelect.tsx";

function App() {
  return (
    <div className="flex flex-col max-w-md mx-auto p-4">
      <ProgressIndicator />
      <Step1CountrySelect />
    </div>
  );
}

export default App
