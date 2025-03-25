import React from 'react';
import {useSignupStore} from '@/src/state/useSignupStore';
import {flowDefinition} from "@/src/data/flowDefinition.ts";
import ProgressIndicator from '@/src/components/common/ProgressIndicator.tsx';
import Step1CountrySelect from '@/src/components/steps/Step1CountrySelect';
import Step6Avatar from '@/src/components/steps/Step6Avatar';
import Step7Review from '@/src/components/steps/Step7Review';


function buildSteps(selectedCountry: string) {
  const steps = [<Step1CountrySelect key="selectCountry" />];

  if (!selectedCountry) {
    return steps;
  }

  const countryFlow = flowDefinition[selectedCountry] || [];

  countryFlow.forEach((StepComponent, index) => {
    steps.push(<StepComponent key={`step-${index + 2}`} />);
  });

  steps.push(<Step6Avatar key="stepAvatar" />);

  steps.push(<Step7Review key="stepReview" />);

  return steps;
}
const App: React.FC = () => {
  const currentStep = useSignupStore(state => state.currentStep);
  const selectedCountry = useSignupStore(state => state.selectedCountry);

  const steps = buildSteps(selectedCountry);
  const content = steps[currentStep - 1] || null;

  return (
    <div className="flex flex-col max-w-md mx-auto p-4 xs:w-80 w-auto">
      <ProgressIndicator />
      {content}
    </div>
  );
};

export default App;
