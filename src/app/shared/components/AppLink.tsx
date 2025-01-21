import Link from 'next/link';
import styles from './AppLink.module.css';
import { ReactNode } from 'react';

export default function AppLink({
   href,
   children,
   className,
}: {
   href: string;
   children: ReactNode;
   className?: string;
}) {
   return (
      <>
         <Link href={href} className={`${styles.root} ${className}`}>
            {children}
         </Link>
      </>
   );
}
