import type {JSX} from "react";
import {useSignupStore} from "./state/useSignupStore.ts";
import './App.css'
import ProgressIndicator from "./components/common/ProgressIndicator.tsx";
import Step1CountrySelect from "./components/steps/Step1CountrySelect.tsx";

function App() {
  const currentStep = useSignupStore(state => state.currentStep);

  // Determine which component to render for the current step
  let content: JSX.Element | null = null;
  if (currentStep === 1) {
    content = <Step1CountrySelect />;
  }
  return (
    <div className="flex flex-col max-w-md mx-auto p-4">
      <ProgressIndicator />
      {content}
    </div>
  );
}

export default App
