import type {JSX} from "react";
import {useSignupStore} from "./state/useSignupStore.ts";
import {countryConfig} from "./data/countryConfig.ts";
import ProgressIndicator from "./components/common/ProgressIndicator.tsx";
import Step1CountrySelect from "./components/steps/Step1CountrySelect.tsx";
import Step2CountryField from "./components/steps/Step2CountryField.tsx";
import Step3CountryField from "./components/steps/Step3CountryField.tsx";
import './App.css'
import Step4CountryField from "./components/steps/Step4CountryField.tsx";
import Step5CountryField from "./components/steps/Step5CountryField.tsx";

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
          content = <Step3CountryField />;
          break;
        case 4:
          content = <Step4CountryField />;
          break;
        case 5:
          content = <Step5CountryField />;
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
