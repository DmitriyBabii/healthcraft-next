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

export default function FoodPage() {
   const { data: session } = useSession();
   const [open, setOpen] = useState<boolean>(false);

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
               <Image src={foodImage} className={styles.img} alt="food" />
               <div className={styles.greetingTitle}>
                  <div className={styles.title}>
                     <h1 className={styles.mainTitle}>
                        Індивідуальній раціон харчування
                     </h1>
                     <span className={styles.span}>
                        Для тих, хто піклується про своє тіло, здоров&apos;я та
                        час.
                     </span>
                  </div>
                  {session ? (
                     <MainButton
                        className={styles.lastBlock}
                        label="Замовити"
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
                        Для замовлення індивідуального харчування вам слід
                        авторизуватися
                     </div>
                  )}
               </div>
            </div>
            <div className={styles.care}>
               Турбота про себе — це турбота про майбутнє
            </div>
            <div className={styles.questions}>
               <h2 className={styles.h2}>
                  Які питання закриє вам раціон харчування?
               </h2>
               <div className={styles.tiles}>
                  <Tile
                     icon={weightIcon}
                     label="Корекція ваги"
                     content="Якщо ви хочете скоригувати свої форми."
                  />
                  <Tile
                     icon={strongIcon}
                     label="Набір маси"
                     content="Чи плануєте набрати м'язову масу? Ми Вам допоможемо!"
                  />
                  <Tile
                     icon={doctorIcon}
                     label="Проблема зі шкірою"
                     content="Якщо ви помітили явні проблеми зі шкірою обличчя."
                  />
                  <Tile
                     icon={pillsIcon}
                     label="Нестача вітамінів"
                     content="Якщо в організмі не вистачає вітамінів та мікроелементів."
                  />
                  <Tile
                     icon={energyIcon}
                     label="Відсутність енергії"
                     content="Чи відчуваєте, що немає енергії на здавалося б елементарні заняття?"
                  />
                  <Tile
                     icon={foodIcon}
                     label="Залежність від їжі"
                     content="Емоційна залежність від їжі. Коли складно стримати себе, щоб не з'їсти чогось смачненького."
                  />
               </div>
            </div>
            <div className={styles.work}>
               <h2>Як ми працюємо</h2>
               <div className={styles.step}>
                  <div className={styles.number}>1</div>
                  <span className={styles.label}>
                     Ви купуєте Індивідуальний раціон харчування.
                  </span>
               </div>
               <div className={styles.step}>
                  <div className={styles.number}>2</div>
                  <span className={styles.label}>
                     Вам на пошту приходить лист з анкетою, яку ви заповнюєте і
                     надсилаєте нам.
                  </span>
               </div>
               <div className={styles.step}>
                  <div className={styles.number}>3</div>
                  <span className={styles.label}>
                     Ми складаємо раціон та відправляємо вам на пошту.
                  </span>
               </div>
               <div className={styles.step}>
                  <div className={styles.number}>4</div>
                  <span className={styles.label}>
                     Ви корисно і смачно харчуєтесь в задоволення.
                  </span>
               </div>
            </div>
            <div
               style={{ margin: '175px auto 64px auto', width: 'min-content' }}
            >
               {session ? (
                  <MainButton label="Замовити" onClick={() => setOpen(true)} />
               ) : (
                  <div
                     style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        textWrap: 'nowrap',
                     }}
                  >
                     Для замовлення індивідуального харчування вам слід
                     авторизуватися
                  </div>
               )}
            </div>
         </main>
      </>
   );
}
