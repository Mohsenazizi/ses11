import React from 'react';
import { ToastContainer } from '../components'

const ToastContext = React.createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const createToast = React.useCallback((content) => {
      setToasts((currentToasts)=> [...currentToasts, content])
  }, []);
  
  return (
    <ToastContext.Provider
      value={{
        createToast
      }}
    >
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const { createToast } = React.useContext(ToastContext);
  return {
    createToast
  }
}
