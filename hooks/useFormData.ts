import { ChangeEvent, useState } from 'react';

export interface FormData {
  [key: string]: string;
}

const useFormData = (initialData: FormData = {}) => {
  const [formData, setFormData] = useState<FormData>(initialData);

  const changeFormData = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return {
    formData,
    changeFormData,
  };
};

export { useFormData };
