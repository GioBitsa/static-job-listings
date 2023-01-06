import { createContext, useState } from "react";

type CreateGlobalContextProps = {
  activeFilters: string[];
  setActiveFilters: (value: any) => void;
  deleteSingleTag: (value: string) => void;
  deleteAllList: () => void;
};

type GlobalContextProps = {
  children: React.ReactNode;
};

export const CreateGlobalContext = createContext<CreateGlobalContextProps>(
  {} as CreateGlobalContextProps
);

export const GlobalContext = ({ children }: GlobalContextProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const deleteSingleTag = (value: string) => {
    const newArray = activeFilters.filter((item) => item !== value);
    setActiveFilters(newArray);
  };

  const deleteAllList = () => {
    setActiveFilters([]);
  };

  const contextValues: CreateGlobalContextProps = {
    activeFilters,
    setActiveFilters,
    deleteSingleTag,
    deleteAllList,
  };

  return (
    <CreateGlobalContext.Provider value={contextValues}>
      {children}
    </CreateGlobalContext.Provider>
  );
};
