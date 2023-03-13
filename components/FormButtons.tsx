import React from 'react';

const FormButtons = () => {
  return (
    <div className='form-controls'>
      <button type='submit' className='button-primary'>
        Enviar datos
      </button>
      <button type='reset' className='button-secondary'>
        Cancelar
      </button>
    </div>
  );
};

export { FormButtons };
