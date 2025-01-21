'use client';

import {
   ChangeEvent,
   Dispatch,
   FormEventHandler,
   SetStateAction,
   useEffect,
   useState,
} from 'react';
import styles from './FoodForm.module.css';
import { useSession } from 'next-auth/react';

interface FoodOrderForm {
   name: string;
   email: string;
   phoneNumber: string;
   wishes: string;
   promo: string;
}

export default function FoodForm({
   setOpen,
}: {
   setOpen: Dispatch<SetStateAction<boolean>>;
}) {
   const [formData, setFromData] = useState<FoodOrderForm>({
      name: '',
      email: '',
      phoneNumber: '',
      wishes: '',
      promo: '',
   });
   const [message, setMessage] = useState<string | null>(null);
   const [sale, setSale] = useState<boolean>(false);
   const { data: session } = useSession();

   useEffect(() => {
      if (formData.promo && formData.promo === 'promo') {
         setSale(true);
      } else {
         setSale(false);
      }
   }, [formData.promo]);

   const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault();

      const res = await fetch('/api/food', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
            Authorization: `${session?.user.jwt}`,
         },
         body: JSON.stringify(formData),
      });

      if (res.ok) {
         setMessage('Ваш запис було збережено');
         setTimeout(() => setOpen(false), 5000);
      }
   };

   const handleChanges = (event: ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = event.target;
      setFromData({
         ...formData,
         [name]: value,
      });
   };

   return (
      <>
         <div className={styles.overlay} onClick={() => setOpen(false)}></div>
         <div className={styles.root}>
            <h3 className={styles.h3}>Ваше замовлення</h3>
            <span className={styles.price}>
               {sale ? '1 499 UAH' : '1 999 UAH'}
            </span>
            <form className={styles.form} onSubmit={handleSubmit}>
               <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="ПІБ"
                  onChange={handleChanges}
                  required
               />
               <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChanges}
                  required
               />
               <input
                  className={styles.input}
                  type="text"
                  name="phoneNumber"
                  placeholder="Номер телефону"
                  onChange={handleChanges}
                  required
               />
               <input
                  className={styles.input}
                  type="text"
                  name="wishes"
                  placeholder="Побажання"
                  onChange={handleChanges}
               />
               <input
                  className={styles.input}
                  type="text"
                  name="promo"
                  placeholder="Промокод"
                  onChange={handleChanges}
               />
               <button className={styles.button}>
                  <span className={styles.span}>Замовити</span>
                  <svg
                     className={styles.svg}
                     xmlns="http://www.w3.org/2000/svg"
                     width="17"
                     height="25"
                     viewBox="0 0 17 25"
                     fill="none"
                  >
                     <path
                        d="M17 12.5L0 25L0 3.52731e-05L17 12.5Z"
                        fill="#D91544"
                     />
                  </svg>
                  <div>{message}</div>
               </button>
            </form>
         </div>
      </>
   );
}
