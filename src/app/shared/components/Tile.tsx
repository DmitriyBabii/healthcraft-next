import Image from 'next/image';
import styles from './Tile.module.css';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function Tile({
   icon,
   label,
   content,
}: {
   icon: StaticImport;
   label: string;
   content: string;
}) {
   return (
      <>
         <div className={styles.root}>
            <div className={styles.title}>
               <Image src={icon} alt="icon" />
               <span>{label}</span>
            </div>
            <div className={styles.content}>{content}</div>
         </div>
      </>
   );
}
