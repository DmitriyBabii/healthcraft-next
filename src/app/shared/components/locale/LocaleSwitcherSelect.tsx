'use client';

import styles from './LocaleSwitcherSelect.module.css';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LocaleSwitcherSelect() {
   const router = useRouter();
   const [, startTransition] = useTransition();
   const pathname = usePathname();
   const params: { locale?: string } = useParams();
   const locale = params.locale ?? '';

   const handle = (newLocale: string) => {
      const path = pathname.replace(locale, '');
      startTransition(() => {
         router.replace(`/${newLocale}/${path}`);
      });
   };

   return (
      <div className={styles.root}>
         <div
            className={`${styles.locale} ${locale === 'uk' ? styles.current : ''}`}
            onClick={() => handle('uk')}
         >
            uk
         </div>
         <div
            className={`${styles.locale} ${locale === 'en' ? styles.current : ''}`}
            onClick={() => handle('en')}
         >
            en
         </div>
      </div>
   );
}
