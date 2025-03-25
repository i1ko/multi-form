import React from 'react';

const currentStep = 1;
const totalSteps = 7;
const ProgressIndicator: React.FC = () => {

  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="flex items-center mb-6">
      {steps.map((step, idx) => (
        <React.Fragment key={step}>
          <div className="flex items-center">
            <div
              className={
                'rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold ' +
                (step < currentStep
                  ? 'bg-green-500 text-white'
                  : step === currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600')
              }
            >
              {step < currentStep ? '✓' : step}
            </div>
          </div>
          {idx < steps.length - 1 && (
            <div
              className={
                'flex-1 h-1 ' + (step < currentStep ? 'bg-green-500' : 'bg-gray-300')
              }
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressIndicator;

