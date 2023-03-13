import React, { FormEvent } from 'react';
import { FormButtons } from './FormButtons';
import { FormData } from '@/hooks/useFormData';

interface FormProps {
  title: string;
  formData: FormData;
  children: JSX.Element;
}

const Form = ({ title, formData, children }: FormProps) => {
  const enviarDatos = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='form-container'>
      <h1>{title}</h1>
      <form onSubmit={enviarDatos}>
        <div className='form-inputs'>{children}</div>
        <FormButtons />
      </form>
    </div>
  );
};

export default Form;
