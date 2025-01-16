'use client';

import { useFormContext } from '@/app/shared/providers/FormProvider';
import styles from './CalculatorForm.module.css';
import { FormEventHandler, useState } from 'react';
import { nameMapper } from '@/app/(api)/api/nameMapper';

export default function CalculatorForm({
   label,
   action,
   children,
}: {
   label: string;
   action: string;
   children: any;
}) {
   const [data, setData] = useState<object | undefined>(undefined);
   const [loading, setLoading] = useState<boolean>(false);
   const [localError, setLocalError] = useState<string | undefined>(undefined);
   const { values } = useFormContext();

   const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      setLoading(true);
      setData(undefined);
      setLocalError(undefined)
      fetch(action, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(values),
      })
         .then((res) => {
            if (!res.ok) {
               throw new Error('Помилка при відправлені форми');
            }
            return res.json();
         })
         .then((data) => {
            setData(data);
         })
         .catch((error: Error) => {
            setData(undefined);
            setLocalError(error.message);
         })
         .finally(() => setLoading(false));
   };

   return (
      <>
         <div className={styles.root}>
            <form onSubmit={handleSubmit}>
               <h2>{label}</h2>
               {children}
               {loading && <div>Loading...</div>}
               {data && (
                  <div>
                     {Object.entries(data).map(([key, value]) => {
                        return (
                           <div key={key}>
                              <span>
                                 <b>{nameMapper[key]}: </b>
                              </span>
                              <span>{value}</span>
                           </div>
                        );
                     })}
                  </div>
               )}
               {localError}
               <button>Розрахувати</button>
            </form>
         </div>
      </>
   );
}
