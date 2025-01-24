'use client';

import styles from '../page.module.css';
import bgImage from '../form-bg.jpg';
import CalculatorForm from '@/app/shared/components/forms/CalculatorForm';
import ChooseGender from '@/app/shared/components/inputs/ChooseGender';
import AppInput from '@/app/shared/components/inputs/AppInput';
import { FormProvider } from '@/app/shared/providers/FormProvider';
import OptionInput from '@/app/shared/components/inputs/OptionInput';

export default function BmiCalculator() {
   return (
      <>
         <main
            className={styles.root}
            style={{ backgroundImage: `url(${bgImage.src})` }}
         >
            <FormProvider>
               <CalculatorForm
                  label="Онлайн калькулятор калорій"
                  action="/api/tdee"
               >
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
                  <OptionInput
                     label="Рівень активності"
                     selectName="activityLevel"
                     options={[
                        {
                           title: 'мінімальна (сидячий спосіб життя)',
                           value: 'MIN',
                        },
                        {
                           title: 'невелика (легкі вправи 1-3 рази на тиждень)',
                           value: 'LOW',
                        },
                        {
                           title: 'середня (помірні вправи 3-5 разів на тиждень)',
                           value: 'AVERAGE',
                        },
                        {
                           title: 'висока (інтенсивні вправи 6-7 разів на тиждень)',
                           value: 'HIGH',
                        },
                        {
                           title: 'дуже висока (фізична робота або тренування)',
                           value: 'VERY_HIGH',
                        },
                     ]}
                  />
                  <OptionInput
                     label="Мета"
                     selectName="goal"
                     options={[
                        {
                           title: 'Схуднення',
                           value: 'LOSS',
                        },
                        {
                           title: 'Підтримка',
                           value: 'MAINTENANCE',
                        },
                        {
                           title: 'Набір ваги',
                           value: 'GAIN',
                        },
                     ]}
                  />
               </CalculatorForm>
            </FormProvider>
         </main>
      </>
   );
}
