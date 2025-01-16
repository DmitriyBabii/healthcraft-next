import styles from './GreatingTitle.module.css';

export default function GreetingTitle({
  theme,
  title,
  description,
}: {
  theme: 'dark' | 'light';
  title: string;
  description: string;
}) {
  return (
    <>
      <div className={`${styles.title} ${styles[theme]}`}>
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
    </>
  );
}