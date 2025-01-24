import AppLink from './AppLink';
import styles from './MainLinkButton.module.css';

export default function MainLinkButton({
   link,
   theme,
   label,
}: {
   link: string;
   theme: 'dark' | 'light';
   label: string;
}) {
   return (
      <>
         <AppLink href={link} className={`${styles.button} ${styles[theme]}`}>
            <span>{label}</span>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="17"
               height="25"
               viewBox="0 0 17 25"
               fill="none"
            >
               <path d="M17 12.5L0 25L0 3.52731e-05L17 12.5Z" fill="#D91544" />
            </svg>
         </AppLink>
      </>
   );
}
