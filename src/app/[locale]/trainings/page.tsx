'use client';

import styles from './page.module.css';
import { TrainingCollection, TrainingType } from '@/app/types/response';
import axios from 'axios';
import Image from 'next/image';
import trainingImage from './training.png';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function TrainingPage() {
   const [loading, setLoading] = useState<boolean>(true);
   const [data, setData] = useState<TrainingCollection[] | null>(null);
   const [training, setTraining] = useState<string | null>(null);
   const t = useTranslations('Training');

   useEffect(() => {
      axios.get(`/api/trainings`).then((res) => {
         if (res.status === 200) {
            setData(res.data);
            setLoading(false);
         }
      });
   }, []);

   const handleTrainingType = (type: TrainingType): string => {
      switch (type) {
         case 'WEIGHT_LOSS':
            return t('WEIGHT_LOSS');
         case 'WEIGHT_GAIN':
            return t('WEIGHT_GAIN');
         case 'STRETCHING':
            return t('STRETCHING');
         default:
            return type as string;
      }
   };

   if (loading) {
      return <div className={styles.loading}>{t('loading')}</div>;
   }

   return (
      <>
         <main>
            {training && (
               <>
                  <div
                     className={styles.overlay}
                     onClick={() => setTraining(null)}
                  ></div>
                  <div className={styles.video}>
                     <iframe
                        width="560"
                        height="315"
                        src={training}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                     ></iframe>
                  </div>
               </>
            )}
            {data &&
               data.map((collection) => {
                  return (
                     <div
                        className={styles.trainingCollection}
                        key={collection.id}
                     >
                        <h2 className={styles.title}>
                           {handleTrainingType(collection.type)}
                        </h2>
                        <div className={styles.trainings}>
                           {collection.trainings.map((training) => {
                              return (
                                 <div
                                    className={styles.training}
                                    key={training.id}
                                 >
                                    <span className={styles.span}>
                                       {training.name}
                                    </span>
                                    <div>
                                       <Image
                                          src={trainingImage}
                                          width={300}
                                          height={150}
                                          alt="training"
                                       />
                                    </div>
                                    <div
                                       className={styles.btn}
                                       onClick={() =>
                                          setTraining(training.videoSrc)
                                       }
                                    >
                                       {t('training')}
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  );
               })}
         </main>
      </>
   );
}
