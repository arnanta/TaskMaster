import React, { createContext, ReactNode, useContext, useState } from 'react';

type FormContextType = {
  showForm: boolean;
  openForm: () => void;
  closeForm: () => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  return (
    <FormContext.Provider value={{ showForm, openForm, closeForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new TypeError('Form Context is not there');
  }
  return context;
};
