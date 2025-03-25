import Step2CountryField from '@/src/components/steps/Step2CountryField';
import Step3CountryField from '@/src/components/steps/Step3CountryField';
import Step4CountryField from '@/src/components/steps/Step4CountryField';
import Step5CountryField from '@/src/components/steps/Step5CountryField';
import type {FC} from "react";

const defaultFlow = [
  Step2CountryField,
  Step3CountryField,
  Step4CountryField,
  Step5CountryField,
];
export const flowDefinition: Record<string, FC[]> = {
  USA: [...defaultFlow],
  UAE: [...defaultFlow],
  India: [...defaultFlow],
  Germany: [...defaultFlow],
  Canada: [...defaultFlow],
  UK: [...defaultFlow],
};
