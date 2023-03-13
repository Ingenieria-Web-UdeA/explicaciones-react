import { useFormData } from '@/hooks/useFormData';
import Form from './Form';

const FormInfoPersonal = () => {
  const { formData, changeFormData } = useFormData({
    name: 'Daniel',
    lastName: 'Saldarriaga',
    email: '',
    birthday: '',
  });

  return (
    <Form title='Info personal' formData={formData}>
      <>
        <label htmlFor='name'>
          <span>Nombre</span>
          <input
            required
            value={formData.name}
            onChange={changeFormData}
            type='text'
            name='name'
            placeholder='Mi nombre'
          />
        </label>
        <label htmlFor='lastName'>
          <span>Apellido</span>
          <input
            required
            value={formData.lastName}
            onChange={changeFormData}
            type='text'
            placeholder='Mi apellido'
            name='lastName'
          />
        </label>
        <label htmlFor='email'>
          <span>Correo</span>
          <input
            value={formData.email}
            onChange={changeFormData}
            type='email'
            placeholder='correo@correo.com'
            name='email'
          />
        </label>
        <label htmlFor='birthday'>
          <span>Fecha de nacimiento</span>
          <input value={formData.birthday} onChange={changeFormData} type='date' name='birthday' />
        </label>
        <label>
          <span>Empresa</span>
          <input
            type='text'
            name='enterprise'
            placeholder='Nombre de la empresa'
            value={formData.enterprise}
            onChange={changeFormData}
          />
        </label>
        <label>
          <span>Profesión</span>
          <input
            type='text'
            name='degree'
            placeholder='Mi profesión'
            value={formData.degree}
            onChange={changeFormData}
          />
        </label>
      </>
    </Form>
  );
};

export { FormInfoPersonal };
