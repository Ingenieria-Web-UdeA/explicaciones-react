import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface MessagesContextProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  messages: string[];
  setMessages: Dispatch<SetStateAction<string[]>>;
  alerts: string[];
  setAlerts: Dispatch<SetStateAction<string[]>>;
}

export const MessagesContext = createContext<MessagesContextProps>({} as MessagesContextProps);

export const useMessagesContext = () => useContext(MessagesContext);

interface MessagesContextProvider {
  children: JSX.Element;
}

export const MessagesContextProvider = ({ children }: MessagesContextProvider) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [alerts, setAlerts] = useState<string[]>([]);
  return (
    <MessagesContext.Provider value={{ text, setText, messages, setMessages, alerts, setAlerts }}>
      {children}
    </MessagesContext.Provider>
  );
};
