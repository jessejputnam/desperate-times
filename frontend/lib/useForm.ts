import { ChangeEvent, useState } from "react";

type InputType = Record<string, string | number>;
// type InputType = Record<string, string | number | [FileList]>;

interface useFormReturn {
  inputs: InputType;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
  clearForm: () => void;
}

export default function useForm(initial: InputType = {}) {
  // Create a state object for inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e: ChangeEvent<any>): void {
    let { value, name, type } = e.target;

    if (type === "number") value = parseInt(value);
    if (type === "file") [value] = e.target.files;

    setInputs({
      // Copy existing state
      ...inputs,
      [name]: value
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankArr = Object.entries(inputs).map(([key, value]) => [key, ""]);
    const blankState = Object.fromEntries(blankArr);
    setInputs(blankState);
  }

  // Return the things we want to surface from custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
}
