import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { countryConfig } from '../data/countryConfig';

interface SignupState {
  currentStep: number;
  selectedCountry: string;
  fields: Record<string, string>;
  avatar: string | null;
  setCountry: (country: string) => void;
  setFieldValue: (fieldName: string, value: string) => void;
  setAvatar: (avatarData: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

export const useSignupStore = create<SignupState>()(
  persist(
    (set, get) => ({
      currentStep: 1,
      selectedCountry: '',
      fields: {},
      avatar: null,
      setCountry: (country: string) => {
        const prevCountry = get().selectedCountry;
        if (prevCountry && prevCountry !== country) {
          // Country changed, reset fields (keep avatar if already uploaded)
          set({ fields: {}, avatar: get().avatar });
        }
        set({ selectedCountry: country });
      },
      setFieldValue: (fieldName: string, value: string) => {
        set(state => ({ fields: { ...state.fields, [fieldName]: value } }));
      },
      setAvatar: (avatarData: string) => {
        set({ avatar: avatarData });
      },
      nextStep: () => {
        const state = get();
        let totalSteps = 1;
        if (state.selectedCountry) {
          // todo: fix the type error
          const fieldCount = countryConfig[state.selectedCountry]?.fields.length || 0;
          totalSteps = 1 + fieldCount + 2;
        }
        if (state.currentStep < totalSteps) {
          set({ currentStep: state.currentStep + 1 });
        }
      },
      prevStep: () => {
        const state = get();
        if (state.currentStep > 1) {
          set({ currentStep: state.currentStep - 1 });
        }
      },
      reset: () => {
        set({ currentStep: 1, selectedCountry: '', fields: {}, avatar: null });
        try {
          localStorage.removeItem('signupForm');
        } catch {
          // todo: replace with real error handling
          /* ignore */
        }
      }
    }),
    { name: 'signupForm' }
  )
);
