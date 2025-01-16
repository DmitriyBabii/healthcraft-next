import {
   createContext,
   useContext,
   useState,
   ReactNode,
   ChangeEvent,
} from 'react';

interface FormContextType {
   values: Record<string, string | number>;
   handleChange: (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
   ) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
   const context = useContext(FormContext);
   if (!context) {
      throw new Error('useFormContext must be used within a FormProvider');
   }
   return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
   const [values, setValues] = useState<Record<string, string | number>>({});

   const handleChange = (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
   ) => {
      const { name, value, type } = e.target;
      setValues((prev) => ({
         ...prev,
         [name]: type === 'number' ? Number(value) : value,
      }));
   };

   return (
      <FormContext.Provider value={{ values, handleChange }}>
         {children}
      </FormContext.Provider>
   );
};
