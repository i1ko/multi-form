import React from 'react';
import { useSignupStore } from '../../state/useSignupStore';
import { countryConfig } from '../../data/countryConfig';

const Step7Review: React.FC = () => {
  const selectedCountry = useSignupStore(state => state.selectedCountry);
  const fields = useSignupStore(state => state.fields);
  const avatar = useSignupStore(state => state.avatar);
  const prevStep = useSignupStore(state => state.prevStep);
  const reset = useSignupStore(state => state.reset);

  if (!selectedCountry) return null;
  const countryLabel = countryConfig[selectedCountry].label;
  const fieldConfigs = countryConfig[selectedCountry].fields;

  const handleConfirm = () => {
    // Here is the submission of the data to a server
    alert('Form submitted successfully!');
    console.log('Submitted data:', {
      country: selectedCountry,
      ...fields,
      avatar
    });
    reset();
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Review Your Information</h2>
      <div className="mb-2">
        <span className="font-medium">Country:</span> {countryLabel}
      </div>
      {fieldConfigs.map(field => (
        <div className="mb-2" key={field.name}>
          <span className="font-medium">{field.label}:</span> {fields[field.name] || ''}
        </div>
      ))}
      <div className="mb-4">
        <span className="font-medium">Avatar:</span>
        {avatar ? (
          <img
            src={avatar}
            alt="Avatar"
            className="w-24 h-24 object-cover rounded-full mt-2"
          />
        ) : (
          <span> (No Avatar Uploaded)</span>
        )}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleConfirm}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
};

export default Step7Review;
