'use client';

import { useFormContext } from '../../providers/FormProvider';
import styles from './ChooseGender.module.css';

export default function ChooseGender() {
   const { handleChange } = useFormContext();

   return (
      <>
         <div className={styles.root}>
            <span>Стать:</span>
            <label className={styles.label}>
               <input
                  className={styles.input}
                  type="radio"
                  value={'FEMALE'}
                  name="gender"
                  required={true}
                  onChange={handleChange}
               />
               <span>жінка</span>
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
               <span>чоловік</span>
            </label>
         </div>
      </>
   );
}
