'use client';

import styles from '../page.module.css';
import bgImage from '../form-bg.jpg';
import CalculatorForm from '@/app/shared/components/forms/CalculatorForm';
import ChooseGender from '@/app/shared/components/inputs/ChooseGender';
import AppInput from '@/app/shared/components/inputs/AppInput';
import { FormProvider } from '@/app/shared/providers/FormProvider';
 
export default function BmiCalculator() {
   return (
      <>
         <main
            className={styles.root}
            style={{ backgroundImage: `url(${bgImage.src})` }}
         >
            <FormProvider>
               <CalculatorForm label="Онлайн калькулятор ІМТ" action="/api/bmi">
                  <ChooseGender />
                  <AppInput
                     label="Вік"
                     type="number"
                     name="age"
                     min={12}
                     step={1}
                     required={true}
                  />
                  <AppInput
                     label="Зріст"
                     type="number"
                     name="height"
                     min={100}
                     step={1}
                     required={true}
                  />
                  <AppInput
                     label="Вага"
                     type="number"
                     name="weight"
                     min={30}
                     step={0.1}
                     required={true}
                  />
               </CalculatorForm>
            </FormProvider>
         </main>
      </>
   );
}
