import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your state
interface GlobalState {
  language: string;
  region: string;
  currency: string;
}

// Define the shape of your context
interface GlobalStateContextType {
  state: GlobalState;
  updateState: (key: keyof GlobalState, value: string) => void;
}

// Create the context with a default value
const GlobalStateContext = createContext<GlobalStateContextType | null>(null);

// Provide the context with real values in the provider component
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<GlobalState>({
    language: "en",
    region: "US",
    currency: "USD",
  });

  const updateState = (key: keyof GlobalState, value: string) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <GlobalStateContext.Provider value={{ state, updateState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Hook to use the GlobalStateContext
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === null) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
