import { useFormData } from '@/hooks/useFormData';
import React, { FormEvent, useState } from 'react';
import Form from './Form';
import { FormButtons } from './FormButtons';

const FormInfoLaboral = () => {
  const { formData, changeFormData } = useFormData();

  return (
    <Form title='Info laboral' formData={formData}>
      <>
        <label>
          <span>Fecha de inicio</span>
          <input
            value={formData.startDate}
            onChange={changeFormData}
            name='startDate'
            type='date'
          />
        </label>
        <label>
          <span>Área de la empresa</span>
          <input
            value={formData.department}
            onChange={changeFormData}
            name='department'
            type='text'
            placeholder='Departamento de compras'
          />
        </label>
      </>
    </Form>
  );
};

export { FormInfoLaboral };
