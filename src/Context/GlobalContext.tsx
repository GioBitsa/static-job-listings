import { createContext, useState } from "react";

type CreateGlobalContextProps = {
  activeFilters: string[];
  setActiveFilters: (value: any) => void;
};

type GlobalContextProps = {
  children: React.ReactNode;
};

export const CreateGlobalContext =
  createContext<CreateGlobalContextProps | null>(null);

export const GlobalContext = ({ children }: GlobalContextProps) => {
  const [activeFilters, setActiveFilters] = useState([]);

  return (
    <CreateGlobalContext.Provider
      value={{
        activeFilters,
        setActiveFilters,
      }}
    >
      {children}
    </CreateGlobalContext.Provider>
  );
};
