'use client';

import { useTranslations } from 'next-intl';
import { useFormContext } from '../../providers/FormProvider';
import styles from './ChooseGender.module.css';

export default function ChooseGender() {
   const { handleChange } = useFormContext();
   const t = useTranslations('Gender');

   return (
      <>
         <div className={styles.root}>
            <span>{t('gender-label')}</span>
            <label className={styles.label}>
               <input
                  className={styles.input}
                  type="radio"
                  value={'FEMALE'}
                  name="gender"
                  required={true}
                  onChange={handleChange}
               />
               <span>{t('female')}</span>
            </label>
            <label className={styles.label}>
               <input
                  className={styles.input}
                  type="radio"
                  value={'MALE'}
                  name="gender"
                  required={true}
                  onChange={handleChange}
               />
               <span>{t('male')}</span>
            </label>
         </div>
      </>
   );
}
