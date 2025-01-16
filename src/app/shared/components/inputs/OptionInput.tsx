'use client';

import { useEffect, useRef } from 'react';
import { useFormContext } from '../../providers/FormProvider';
import styles from './OptionInput.module.css';

type OptionType = {
   title: string;
   value: string;
};

type OptionInputType = {
   label: string;
   selectName: string;
   options: OptionType[];
};

export default function OptionInput({
   label,
   selectName,
   options,
}: OptionInputType) {
   const { values, handleChange } = useFormContext();

   useEffect(() => {
      values[selectName] = options[0].value;
   }, []);

   return (
      <>
         <div className={styles.root}>
            <span>{label}</span>
            <select name={selectName} onChange={handleChange} required={true}>
               {options.map((option) => (
                  <option key={option.value} value={option.value}>
                     {option.title}
                  </option>
               ))}
            </select>
         </div>
      </>
   );
}
