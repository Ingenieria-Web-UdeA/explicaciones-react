import {
  MessagesContext,
  MessagesContextProvider,
  useMessagesContext,
} from '@/context/messagesContext';
import { useState } from 'react';

const EjemploContext = () => {
  return (
    <MessagesContextProvider>
      <div className='flex flex-col items-center gap-3 p-10'>
        <h1>Ejemplo de manejo de estados</h1>
        <MessagesSection />
        <InputSection />
        <ButtonsSection />
      </div>
    </MessagesContextProvider>
  );
};

const InputSection = () => {
  const { text, setText } = useMessagesContext();
  return (
    <label>
      <span>Agregue el texto</span>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder='Mensaje o alerta'
      />
    </label>
  );
};

const MessagesSection = () => {
  const { messages, alerts } = useMessagesContext();
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

const ButtonsSection = () => {
  const { text, setAlerts, setMessages } = useMessagesContext();

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

export default EjemploContext;
