import React, { createContext, useState, useCallback } from 'react'
import { useContext } from 'react/cjs/react.development';

export const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  
  const onAdd = useCallback(() => {
    setCounter(counter => counter + 1)
  }, [])
  
  const onMinus = useCallback(() => {
    setCounter(counter => counter - 1);
  }, [])

  return (
    <CounterContext.Provider
      value={{
        counter,
        onAdd,
        onMinus
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => {
   const { onMinus, onAdd, counter } = useContext(CounterContext);
  return {
    onMinus,
    onAdd,
    counter
  }
}
