'use client';

import Image from 'next/image';
import foodImage from './food.jpg';
import styles from './page.module.css';
import MainButton from '@/app/shared/components/MainButton';
import Tile from '@/app/shared/components/Tile';
import weightIcon from './icons/weight.svg';
import strongIcon from './icons/strong.svg';
import doctorIcon from './icons/doctor.svg';
import pillsIcon from './icons/pills.svg';
import energyIcon from './icons/energy.svg';
import foodIcon from './icons/food.svg';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import FoodForm from '@/app/shared/components/food/FoodForm';
import { useTranslations } from 'use-intl';

export default function FoodPage() {
   const { data: session } = useSession();
   const [open, setOpen] = useState<boolean>(false);
   const t = useTranslations('Food');

   return (
      <>
         {open && (
            <>
               <div
                  className={styles.overlay}
                  onClick={() => setOpen(false)}
               ></div>
               <FoodForm setOpen={setOpen} />
            </>
         )}

         <main className={styles.root}>
            <div className={styles.greetingsBlock}>
               <Image src={foodImage} className={styles.img} alt="food" priority />
               <div className={styles.greetingTitle}>
                  <div className={styles.title}>
                     <h1 className={styles.mainTitle}>{t('main-header')}</h1>
                     <span className={styles.span}>{t('main-slogan')}</span>
                  </div>
                  {session ? (
                     <MainButton
                        className={styles.lastBlock}
                        label={t('order')}
                        onClick={() => setOpen(true)}
                     />
                  ) : (
                     <div
                        className={styles.lastBlock}
                        style={{
                           fontSize: '24px',
                           fontWeight: '600',
                           textWrap: 'nowrap',
                        }}
                     >
                        {t('auth-to-order')}
                     </div>
                  )}
               </div>
            </div>
            <div className={styles.care}>{t('section-slogan')}</div>
            <div className={styles.questions}>
               <h2 className={styles.h2}>{t('question-header')}</h2>
               <div className={styles.tiles}>
                  <Tile
                     icon={weightIcon}
                     label={t('tile-weight-header')}
                     content={t('tile-weight-desc')}
                  />
                  <Tile
                     icon={strongIcon}
                     label={t('tile-strong-header')}
                     content={t('tile-strong-desc')}
                  />
                  <Tile
                     icon={doctorIcon}
                     label={t('tile-skin-header')}
                     content={t('tile-skin-desc')}
                  />
                  <Tile
                     icon={pillsIcon}
                     label={t('tile-vitamin-header')}
                     content={t('tile-vitamin-desc')}
                  />
                  <Tile
                     icon={energyIcon}
                     label={t('tile-energy-header')}
                     content={t('tile-energy-desc')}
                  />
                  <Tile
                     icon={foodIcon}
                     label={t('tile-food-header')}
                     content={t('tile-food-desc')}
                  />
               </div>
            </div>
            <div className={styles.work}>
               <h2>{t('how-we-work')}</h2>
               <div className={styles.step}>
                  <div className={styles.number}>1</div>
                  <span className={styles.label}>{t('step1')}</span>
               </div>
               <div className={styles.step}>
                  <div className={styles.number}>2</div>
                  <span className={styles.label}>{t('step2')}</span>
               </div>
               <div className={styles.step}>
                  <div className={styles.number}>3</div>
                  <span className={styles.label}>{t('step3')}</span>
               </div>
               <div className={styles.step}>
                  <div className={styles.number}>4</div>
                  <span className={styles.label}>{t('step4')}</span>
               </div>
            </div>
            <div
               style={{ margin: '175px auto 64px auto', width: 'min-content' }}
            >
               {session ? (
                  <MainButton
                     label={t('order')}
                     onClick={() => setOpen(true)}
                  />
               ) : (
                  <div
                     style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        textWrap: 'nowrap',
                     }}
                  >
                     {t('auth-to-order')}
                  </div>
               )}
            </div>
         </main>
      </>
   );
}
