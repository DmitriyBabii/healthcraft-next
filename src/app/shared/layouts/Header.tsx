'use client';

import { usePathname } from 'next/navigation';
import AppLink from '../components/AppLink';
import styles from './Header.module.css';
import BurgerMenu from '../components/burger/BurgerMenu';

export default function Header() {
   const pathname = usePathname();
   const isHomePage = pathname === '/';

   return (
      <>
         <header className={`${styles.root} ${isHomePage ? styles.home : ''}`}>
            <AppLink href={'/food'} className={styles.link}>
               Харчування
            </AppLink>
            <AppLink href={'/calculator/bmi'} className={styles.link}>
               Калькулятор (ІМТ)
            </AppLink>
            <AppLink href={'/'} className={styles.mainLink}>
               HC
            </AppLink>
            <AppLink href="/calculator/tdee" className={styles.link}>
               Калькулятор калорій
            </AppLink>
            <AppLink href={'/trainings'} className={styles.link}>
               Тренування
            </AppLink>
            <BurgerMenu />
         </header>
      </>
   );
}
