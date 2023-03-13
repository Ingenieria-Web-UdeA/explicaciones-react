import { Dispatch, SetStateAction, useState } from 'react';

const EjemploEstados = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [alerts, setAlerts] = useState<string[]>([]);

  return (
    <div className='flex flex-col items-center gap-3 p-10'>
      <h1>Ejemplo de manejo de estados</h1>
      <MessagesSection messages={messages} alerts={alerts} />
      <label>
        <span>Agregue el texto</span>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type='text'
          placeholder='Mensaje o alerta'
        />
      </label>
      <ButtonsSection text={text} setAlerts={setAlerts} setMessages={setMessages} />
    </div>
  );
};

interface MessagesSectionProps {
  messages: string[];
  alerts: string[];
}

const MessagesSection = ({ messages, alerts }: MessagesSectionProps) => {
  return (
    <div className='flex gap-4'>
      <div className='flex flex-col'>
        <span>Alertas</span>
        <ListaSpans messages={alerts} name='Alerts' />
      </div>
      <div className='flex flex-col'>
        <span>Mensajes</span>
        <ListaSpans messages={messages} name='Mensajes' />
      </div>
    </div>
  );
};

interface ListaSpansProps {
  messages: string[];
  name: string;
}

const ListaSpans = ({ messages, name }: ListaSpansProps) => {
  return (
    <div className='text-xl border-2 rounded-lg p-4 flex flex-col'>
      {messages.map((m, index) => {
        return <span key={`${name}_${index}`}>{m}</span>;
      })}
    </div>
  );
};

interface ButtonsSectionProps {
  text: string;
  setMessages: Dispatch<SetStateAction<string[]>>;
  setAlerts: Dispatch<SetStateAction<string[]>>;
}

const ButtonsSection = ({ text, setMessages, setAlerts }: ButtonsSectionProps) => {
  const addAlert = () => {
    setAlerts((prev) => [...prev, text]);
  };

  const addMessage = () => {
    setMessages((prev) => [...prev, text]);
  };

  return (
    <div className='flex gap-4'>
      <button onClick={addAlert} className='button-primary'>
        Agregar alerta
      </button>
      <button onClick={addMessage} className='button-primary'>
        Agregar mensaje
      </button>
    </div>
  );
};

export default EjemploEstados;
