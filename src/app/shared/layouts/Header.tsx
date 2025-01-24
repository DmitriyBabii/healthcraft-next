'use client';

import { usePathname } from 'next/navigation';
import AppLink from '../components/AppLink';
import styles from './Header.module.css';
import BurgerMenu from '../components/burger/BurgerMenu';
import { useTranslations } from 'next-intl';

export default function Header() {
   const pathname = usePathname();
   const isHomePage = pathname.match(/\/(uk|en)$/);
   const t = useTranslations('Header');

   return (
      <>
         <header className={`${styles.root} ${isHomePage ? styles.home : ''}`}>
            <AppLink href={'/food'} className={styles.link}>
               {t('food-link')}
            </AppLink>
            <AppLink href={'/calculator/bmi'} className={styles.link}>
               {t('calculator-bmi')}
            </AppLink>
            <AppLink href={'/'} className={styles.mainLink}>
               HC
            </AppLink>
            <AppLink href="/calculator/tdee" className={styles.link}>
               {t('calculator-tdee')}
            </AppLink>
            <AppLink href={'/trainings'} className={styles.link}>
               {t('training')}
            </AppLink>
            <div>
               <div>en</div>
            </div>
            <BurgerMenu />
         </header>
      </>
   );
}
