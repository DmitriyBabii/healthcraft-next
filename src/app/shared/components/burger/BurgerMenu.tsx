'use client';

import { useState } from 'react';
import styles from './BurgerMenu.module.css';
import Image from 'next/image';
import burgerMenu from './burger-menu.svg';
import burgerClose from './burger-close.svg';
import BurgerContent from './BurgerContent';
import { FormProvider } from '../../providers/FormProvider';

export default function BurgerMenu() {
   const [open, setOpen] = useState<boolean>(false);

   return (
      <div className={styles.root}>
         {open && (
            <div
               className={styles.overlay}
               onClick={() => setOpen(false)}
            ></div>
         )}
         <div className={styles.burgerMenuBtn} onClick={() => setOpen(!open)}>
            {open ? (
               <Image src={burgerClose} alt="close" />
            ) : (
               <Image src={burgerMenu} alt="menu" />
            )}
         </div>
         {open && (
            <FormProvider>
               <BurgerContent />
            </FormProvider>
         )}
      </div>
   );
}
