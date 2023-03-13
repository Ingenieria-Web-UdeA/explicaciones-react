import React from 'react';
import { MdFavorite, MdPerson2 } from 'react-icons/md';
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ComponentesExternos = () => {
  const showSuccess = () => {
    toast.success('Esto es un mensaje de exito');
  };

  const showError = () => {
    toast.error('Esto es un mensaje de error');
  };

  return (
    <div>
      <div>
        <h1>React Icons</h1>
        <span className='text-red-500'>
          <MdFavorite />
        </span>
        <span className='text-red-500'>
          <MdFavorite />
        </span>
        <span className='text-blue-900 text-3xl'>
          <MdPerson2 />
        </span>
      </div>
      <div>
        <h1>React Loading</h1>
        <ReactLoading type='spin' color='#00ffaa' height={32} width={32} />
      </div>
      <div>
        <h1>React Toastify</h1>
        <button onClick={showSuccess} className='button-primary'>
          Mostrar toast success
        </button>
        <button onClick={showError} className='button-primary'>
          Mostrar toast error
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ComponentesExternos;
