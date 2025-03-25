export interface FieldConfig {
  name: string;
  label: string;
  type?: string;
  options?: string[];
}

interface CountryConfig {
  label: string;
  fields: FieldConfig[];
}

export const countryConfig: Record<string, CountryConfig> = {
  USA: {
    label: 'United States',
    fields: [
      { name: 'ssn', label: 'SSN', type: 'text' },
      { name: 'state', label: 'State', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'zip', label: 'ZIP Code', type: 'text' }
    ]
  },
  UAE: {
    label: 'United Arab Emirates',
    fields: [
      { name: 'emiratesId', label: 'Emirates ID', type: 'text' },
      { name: 'visaType', label: 'Visa Type', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'emirate', label: 'Emirate', type: 'text' }
    ]
  },
  Canada: {
    label: 'Canada',
    fields: [
      { name: 'sin', label: 'Social Insurance Number (SIN)', type: 'text' },
      { name: 'province', label: 'Province', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'postalCode', label: 'Postal Code', type: 'text' }
    ]
  },
  Germany: {
    label: 'Germany',
    fields: [
      { name: 'taxId', label: 'Tax ID', type: 'text' },
      { name: 'bundesland', label: 'Bundesland', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'postalCode', label: 'Postal Code', type: 'text' }
    ]
  },
  UK: {
    label: 'United Kingdom',
    fields: [
      { name: 'nin', label: 'National Insurance Number', type: 'text' },
      { name: 'county', label: 'County', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'postcode', label: 'Postcode', type: 'text' }
    ]
  },
  India: {
    label: 'India',
    fields: [
      { name: 'aadhaar', label: 'Aadhaar Number', type: 'text' },
      { name: 'state', label: 'State', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'pinCode', label: 'PIN Code', type: 'text' }
    ]
  }
};
