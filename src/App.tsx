import React, {type JSX} from 'react';
import { useSignupStore } from '@/src/state/useSignupStore';
import { countryConfig } from '@/src/data/countryConfig';
import ProgressIndicator from '@/src/components/common/ProgressIndicator.tsx';
import Step1CountrySelect from '@/src/components/steps/Step1CountrySelect';
import Step2CountryField from '@/src/components/steps/Step2CountryField';
import Step3CountryField from '@/src/components/steps/Step3CountryField';
import Step4CountryField from '@/src/components/steps/Step4CountryField';
import Step5CountryField from '@/src/components/steps/Step5CountryField';
import Step6Avatar from '@/src/components/steps/Step6Avatar';
import Step7Review from '@/src/components/steps/Step7Review';

const App: React.FC = () => {
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
      }
    } else if (currentStep === 1 + fieldCount + 1) {
      // Avatar upload step
      content = <Step6Avatar />;
    } else if (currentStep === 1 + fieldCount + 2) {
      // Review step
      content = <Step7Review />;
    }
  }

  return (
    <div className="flex flex-col max-w-md mx-auto p-4 xs:w-80 w-auto">
      <ProgressIndicator />
      {content}
    </div>
  );
};

export default App;
