import type {JSX} from "react";
import {useSignupStore} from "./state/useSignupStore.ts";
import {countryConfig} from "./data/countryConfig.ts";
import ProgressIndicator from "./components/common/ProgressIndicator.tsx";
import Step1CountrySelect from "./components/steps/Step1CountrySelect.tsx";
import Step2CountryField from "./components/steps/Step2CountryField.tsx";
import './App.css'

function App() {
  const currentStep = useSignupStore(state => state.currentStep);
  const selectedCountry = useSignupStore(state => state.selectedCountry);

  // Determine which component to render for the current step
  let content: JSX.Element | null = null;
  if (currentStep === 1) {
    content = <Step1CountrySelect />;
  } else if (selectedCountry) {
    const fieldCount = countryConfig[selectedCountry]?.fields.length || 0;
    if (currentStep >= 2 && currentStep <= 1 + fieldCount) {
      switch (currentStep) {
        case 2:
          content = <Step2CountryField />;
          break;
        case 3:
          content = <div>Step3CountryField</div>;
          break;
        case 4:
          content = <div>Step4CountryField</div>;
          break;
        case 5:
          content = <div>Step5CountryField</div>;
          break;
        case 6:
          content = <div>Step6CountryField</div>;
          break;
        case 7:
          content = <div>Step7CountryField</div>;
          break;
      }
    }
  }
  return (
    <div className="flex flex-col max-w-md mx-auto p-4">
      <ProgressIndicator />
      {content}
    </div>
  );
}

export default App;
