import { createContext, useContext, useState } from "react";

const ErrorContext = createContext({});

export function ErrorProvider({ children }) {
  const [isError, setIsError] = useState(false);

  function setError(state) {
    setIsError(state);
  }

  return (
    <ErrorContext.Provider value={{ isError, setError }}>
      {children}
    </ErrorContext.Provider>
  );
}

export default function useError() {
  return useContext(ErrorContext);
}
