import Image from 'next/image';
import styles from './Footer.module.css';
import InstagramIcon from './icons/instagram.svg';
import FacebookIcon from './icons/facebook.svg';
import TwitterIcon from './icons/twitter.svg';
import PinterestIcon from './icons/pinterest.svg';
import AppLink from '../components/AppLink';
import { useTranslations } from 'next-intl';

export default function Footer() {
   const t = useTranslations('Footer');

   return (
      <>
         <footer className={styles.root}>
            <div className={styles.contacts}>
               <h3 className={styles.h3}>{t('contacts')}</h3>
               <div>
                  <h4 className={styles.h4}>Email</h4>
                  <AppLink
                     href="mailto:HealthCraft@gmail.com"
                     className={styles.a}
                  >
                     HealthCraft@gmail.com
                  </AppLink>
               </div>
               <div>
                  <h4 className={styles.h4}>{t('phone')}</h4>
                  <AppLink href="tel:+380(96)-54-54-543" className={styles.a}>
                     +380(96)-54-54-543
                  </AppLink>
                  <AppLink href="tel:+380(96)-56-56-598" className={styles.a}>
                     +380(96)-56-56-598
                  </AppLink>
               </div>
            </div>
            <div className={styles.pages}>
               <h3 className={styles.h3}>HealthCraft</h3>
               <AppLink href={'/'} className={styles.a}>
                  {t('main-link')}
               </AppLink>
               <AppLink href={'/food'} className={styles.a}>
                  {t('food-link')}
               </AppLink>
               <AppLink href={'/calculator/bmi'} className={styles.a}>
                  {t('bmi-link')}
               </AppLink>
               <AppLink href={'/calculator/tdee'} className={styles.a}>
                  {t('tdee-link')}
               </AppLink>
               <AppLink href={'/trainings'} className={styles.a}>
                  {t('training-link')}
               </AppLink>
            </div>
            <div className={styles.social}>
               <h3 className={styles.h3}>{t('socials')}</h3>
               <div className={styles.plates}>
                  <a className={styles.a} href="#" target="_blank">
                     <Image
                        src={InstagramIcon}
                        alt="icon"
                        width={20}
                        height={20}
                     />
                  </a>
                  <a className={styles.a} href="#" target="_blank">
                     <Image
                        src={FacebookIcon}
                        alt="icon"
                        width={20}
                        height={20}
                     />
                  </a>
                  <a className={styles.a} href="#" target="_blank">
                     <Image
                        src={TwitterIcon}
                        alt="icon"
                        width={20}
                        height={20}
                     />
                  </a>
                  <a className={styles.a} href="#" target="_blank">
                     <Image
                        src={PinterestIcon}
                        alt="icon"
                        width={20}
                        height={20}
                     />
                  </a>
               </div>
            </div>
         </footer>
      </>
   );
}
