import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignupStore } from '../../state/useSignupStore';
import { countryConfig } from '../../data/countryConfig';
import { validationSchemas } from '../../utils/validationSchemas';

const Step3CountryField: React.FC = () => {
  const selectedCountry = useSignupStore(state => state.selectedCountry);
  const setFieldValue = useSignupStore(state => state.setFieldValue);
  const nextStep = useSignupStore(state => state.nextStep);
  const prevStep = useSignupStore(state => state.prevStep);

  if (!selectedCountry) return null;
  const fieldConfig = countryConfig[selectedCountry].fields[1];

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      [fieldConfig.name]: useSignupStore.getState().fields[fieldConfig.name] || ''
    },
    mode: 'onChange'
  });

  const onSubmit = (data: Record<string, any>) => {
    setFieldValue(fieldConfig.name, data[fieldConfig.name]);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg font-semibold mb-4">{fieldConfig.label}</h2>
      <div className="mb-4">
        <label className="block font-medium mb-1">{fieldConfig.label}</label>
        <input
          type={fieldConfig.type || 'text'}
          {...register(fieldConfig.name, validationSchemas[selectedCountry][fieldConfig.name])}
          className="border border-gray-300 p-2 w-full"
          autoFocus
        />
        <p className="text-red-500 text-sm mt-1 h-[24px]">
          {errors[fieldConfig.name]
            ? errors[fieldConfig.name]?.message as string
            : ''
          }
        </p>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => {
            // Save current input before going back
            setFieldValue(fieldConfig.name, getValues(fieldConfig.name));
            prevStep();
          }}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
        >
          Back
        </button>
        <button type="submit" className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  );
};

export default Step3CountryField;
