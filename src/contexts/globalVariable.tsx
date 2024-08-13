import { createContext, useContext, useState, ReactNode } from "react";

interface GlobalState {
  language: string;
}

interface GlobalStateContextType {
  state: GlobalState;
  updateState: (key: keyof GlobalState, value: string) => void;
}

const GlobalStateContext = createContext<GlobalStateContextType | null>(null);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<GlobalState>({
    language: "en",
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

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === null) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
