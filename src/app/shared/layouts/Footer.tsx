import Image from 'next/image';
import styles from './Footer.module.css';
import InstagramIcon from './icons/instagram.svg';
import FacebookIcon from './icons/facebook.svg';
import TwitterIcon from './icons/twitter.svg';
import PinterestIcon from './icons/pinterest.svg';
import AppLink from '../components/AppLink';

export default function Footer() {
  return (
    <>
      <footer className={styles.root}>
        <div className={styles.contacts}>
          <h3>Контакти</h3>
          <div>
            <h4>Email</h4>
            <AppLink href="mailto:HealthCraft@gmail.com">HealthCraft@gmail.com</AppLink>
          </div>
          <div>
            <h4>Phone</h4>
            <AppLink href="tel:+380(96)-54-54-543">+380(96)-54-54-543</AppLink>
            <AppLink href="tel:+380(96)-56-56-598">+380(96)-56-56-598</AppLink>
          </div>
        </div>
        <div className={styles.pages}>
          <h3>HealthCraft</h3>
          <AppLink href="/" className={styles.link}>
            Головна
          </AppLink>
          <AppLink href="#" className={styles.link}>
            Харчування
          </AppLink>
          <AppLink href="#" className={styles.link}>
            Калькулятор (ІМТ)
          </AppLink>
          <AppLink href="#" className={styles.link}>
            Калькулятор калорій
          </AppLink>
          <AppLink href="#" className={styles.link}>
            Тренування
          </AppLink>
        </div>
        <div className={styles.social}>
          <h3>Соціальні мережі</h3>
          <div className={styles.plates}>
            <a href="#" target="_blank">
              <Image src={InstagramIcon} alt="icon" width={20} height={20} />
            </a>
            <a href="#" target="_blank">
              <Image src={FacebookIcon} alt="icon" width={20} height={20} />
            </a>
            <a href="#" target="_blank">
              <Image src={TwitterIcon} alt="icon" width={20} height={20} />
            </a>
            <a href="#" target="_blank">
              <Image src={PinterestIcon} alt="icon" width={20} height={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
