import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSignupStore } from '../../state/useSignupStore';
import { countryConfig } from '../../data/countryConfig';

interface Step1FormData {
  country: string;
}

const Step1CountrySelect: React.FC = () => {
  const selectedCountry = useSignupStore(state => state.selectedCountry);
  const setCountry = useSignupStore(state => state.setCountry);
  const nextStep = useSignupStore(state => state.nextStep);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<Step1FormData>({
    defaultValues: { country: selectedCountry || '' },
    mode: 'onChange'
  });

  useEffect(() => {
    if (selectedCountry) {
      setValue('country', selectedCountry);
    }
  }, [selectedCountry, setValue]);

  const onSubmit = (data: Step1FormData) => {
    // Save country in store and proceed to next step
    setCountry(data.country);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg font-semibold mb-4">Select Country</h2>
      <div className="mb-4">
        <label className="block font-medium mb-1" htmlFor="country">Country</label>
        <select
          id="country"
          className="border border-gray-300 p-2 w-full"
          {...register('country', {
            required: 'Please select a country',
            onChange: e => setCountry(e.target.value)
          })}
        >
          <option value="" disabled>Select a country</option>
          {Object.entries(countryConfig).map(([code, cfg]) => (
            <option key={code} value={code}>
              {cfg.label}
            </option>
          ))}
        </select>
        <p className="text-red-500 text-sm mt-1 h-[24px]">
          {errors.country ? errors.country.message : ''}
        </p>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1CountrySelect;
