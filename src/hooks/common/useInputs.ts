import { useState } from 'react';

export const useInputs = <T extends object>(initialValue: T) => {
  const [values, setValues] = useState(initialValue);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return { values, onChange, setValues };
};
