'use client';

import { useFormContext } from '../../providers/FormProvider';
import styles from './AppInput.module.css';

type AppInputType = {
   label: string;
   type: string;
   name: string;
   placeholder?: string;
   min?: number;
   max?: number;
   step?: number;
   required?: boolean;
};

export default function AppInput({ label, ...inputProps }: AppInputType) {
   const { handleChange } = useFormContext();

   return (
      <>
         <div className={styles.root}>
            <span>{label}</span>
            <input {...inputProps} className={styles.input} onChange={handleChange} />
         </div>
      </>
   );
}
