'use client';

import styles from '../page.module.css';
import bgImage from '../form-bg.jpg';
import CalculatorForm from '@/app/shared/components/forms/CalculatorForm';
import ChooseGender from '@/app/shared/components/inputs/ChooseGender';
import AppInput from '@/app/shared/components/inputs/AppInput';
import { FormProvider } from '@/app/shared/providers/FormProvider';
import OptionInput from '@/app/shared/components/inputs/OptionInput';
import { useTranslations } from 'next-intl';

export default function BmiCalculator() {
   const t = useTranslations('TDEE');

   return (
      <>
         <main
            className={styles.root}
            style={{ backgroundImage: `url(${bgImage.src})` }}
         >
            <FormProvider>
               <CalculatorForm label={t('header')} action="/api/tdee">
                  <ChooseGender />
                  <AppInput
                     label={t('age-label')}
                     type="number"
                     name="age"
                     min={12}
                     step={1}
                     required={true}
                  />
                  <AppInput
                     label={t('height-label')}
                     type="number"
                     name="height"
                     min={100}
                     step={1}
                     required={true}
                  />
                  <AppInput
                     label={t('weight-label')}
                     type="number"
                     name="weight"
                     min={30}
                     step={0.1}
                     required={true}
                  />
                  <OptionInput
                     label={t('activity-level')}
                     selectName="activityLevel"
                     options={[
                        {
                           title: t('activity-min'),
                           value: 'MIN',
                        },
                        {
                           title: t('activity-low'),
                           value: 'LOW',
                        },
                        {
                           title: t('activity-avarage'),
                           value: 'AVERAGE',
                        },
                        {
                           title: t('activity-high'),
                           value: 'HIGH',
                        },
                        {
                           title: t('activity-very-high'),
                           value: 'VERY_HIGH',
                        },
                     ]}
                  />
                  <OptionInput
                     label={t('goal')}
                     selectName="goal"
                     options={[
                        {
                           title: t('goal-loss'),
                           value: 'LOSS',
                        },
                        {
                           title: t('goal-maintenance'),
                           value: 'MAINTENANCE',
                        },
                        {
                           title: t('goal-gain'),
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
