import styles from './page.module.css';
import bgImage from './index-bg.png';
import GreetingTitle from '../shared/components/GreatingTitle';
import MainLinkButton from '../shared/components/MainLinkButton';
import { useTranslations } from 'next-intl';

export default function Home() {
   const t = useTranslations('MainPage');

   return (
      <>
         <main
            className={styles.root}
            style={{ backgroundImage: `url(${bgImage.src})` }}
         >
            <div className={styles.greeting}>
               <GreetingTitle
                  theme="light"
                  title="Health Craft"
                  description={t('main-header')}
               />
               <div className={styles.content}>
                  <p className={styles.p}>{t('main-desc')}</p>
                  <MainLinkButton
                     theme="light"
                     label={t('main-btn')}
                     link="/calculator/bmi"
                  />
               </div>
            </div>
         </main>
      </>
   );
}
