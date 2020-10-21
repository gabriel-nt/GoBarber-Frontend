import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const AuthContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, type, description }: Omit<ToastMessage, 'id'>) => {
      const id = v4();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(state => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => id !== message.id));
  }, []);

  return (
    <AuthContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </AuthContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
