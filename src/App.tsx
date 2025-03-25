import type {JSX} from "react";
import {useSignupStore} from "./state/useSignupStore.ts";
import './App.css'
import ProgressIndicator from "./components/common/ProgressIndicator.tsx";
import Step1CountrySelect from "./components/steps/Step1CountrySelect.tsx";
import Step2CountryField from "./components/steps/Step2CountryField.tsx";

function App() {
  const currentStep = useSignupStore(state => state.currentStep);
  const selectedCountry = useSignupStore(state => state.selectedCountry);

  // Determine which component to render for the current step
  let content: JSX.Element | null = null;
  if (currentStep === 1) {
    content = <Step1CountrySelect />;
  } else if (selectedCountry) {
    content = <Step2CountryField/>
  }
  return (
    <div className="flex flex-col max-w-md mx-auto p-4">
      <ProgressIndicator />
      {content}
    </div>
  );
}

export default App
