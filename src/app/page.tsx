import styles from './page.module.css';
import bgImage from './index-bg.png';
import GreetingTitle from './shared/components/GreatingTitle';
import MainLinkButton from './shared/components/MainLinkButton';

export default function Home() {
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
            description="Твоє здорове тіло, твій вибір"
          />
          <div className={styles.content}>
            <p>
              Ми раді, що ти обрав нас на шляху до здоровішого та активнішого
              життя. Тут ти знайдеш все необхідне для досягнення своїх цілей.
              Почни свій шлях просто зараз – розрахуй свою масу тіла, щоб
              отримати рекомендації, які допоможуть тобі стати кращою версією
              себе!
            </p>
            <MainLinkButton theme="light" link="/calculator/bmi" />
          </div>
        </div>
      </main>
    </>
  );
}
