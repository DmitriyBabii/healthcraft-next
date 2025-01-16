'use client';

import { usePathname } from 'next/navigation';
import AppLink from '../components/AppLink';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      <header className={`${styles.root} ${isHomePage ? styles.home : ''}`}>
        <AppLink href="#" className={styles.link}>
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
        <AppLink href="#" className={styles.link}>
          Тренування
        </AppLink>
      </header>
    </>
  );
}
