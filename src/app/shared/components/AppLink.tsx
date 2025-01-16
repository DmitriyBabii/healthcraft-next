import Link from 'next/link';
import styles from './AppLink.module.css';

export default function AppLink({
  href,
  children,
  className,
}: {
  href: string;
  children: any;
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
