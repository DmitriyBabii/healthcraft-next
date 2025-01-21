import { MouseEventHandler } from 'react';
import styles from './MainButton.module.css';

export default function MainButton({
   label,
   onClick,
   className,
}: {
   label: string;
   onClick?: MouseEventHandler;
   className?: string;
}) {
   return (
      <div className={`${styles.root} ${className}`} onClick={onClick}>
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
      </div>
   );
}
