'use client';

import { useState } from 'react';
import styles from './BurgerContent.module.css';
import { useFormContext } from '../../providers/FormProvider';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

type BurgerContentSection = 'default' | 'login' | 'signin';

export default function BurgerContent() {
   const [section, setSection] = useState<BurgerContentSection>('default');
   const [error, setError] = useState<string | null>(null);
   const { values, handleChange } = useFormContext();
   const { data: session, status } = useSession();
   const t = useTranslations('BurgerContent');

   const handleSignIn = async () => {
      const result = await signIn('credentials', {
         redirect: false,
         email: values.email,
         password: values.password,
      });

      if (result?.ok) {
         setSection('default');
      } else {
         console.log(result?.error);
         setError(t('wrong-auth'));
      }
   };

   const handleLoginSubmit = async (
      event: React.FormEvent<HTMLFormElement>
   ) => {
      event.preventDefault();
      setError(null);
      handleSignIn();
   };

   const handleSigninSubmit = async (
      event: React.FormEvent<HTMLFormElement>
   ) => {
      event.preventDefault();
      setError(null);

      if (values.password !== values.confirmPassword) {
         setError(t('password-confirm-incorrect'));
         return;
      }

      const res = await fetch('/api/auth/signin', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(values),
      });

      if (res.ok) {
         handleSignIn();
      } else {
         setError((await res.json()).error);
      }
   };

   const renderContent = () => {
      if (status === 'loading') {
         return <div>{t('loading')}</div>;
      }

      switch (section) {
         case 'login': {
            return (
               <>
                  <h3 className={styles.h3}>{t('login')}</h3>
                  <form className={styles.form} onSubmit={handleLoginSubmit}>
                     <input
                        className={styles.input}
                        type="text"
                        placeholder="E-mail"
                        name="email"
                        autoComplete="username"
                        onChange={handleChange}
                        required
                     />
                     <input
                        className={styles.input}
                        type="password"
                        placeholder={t('password-label')}
                        name="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        required
                     />
                     {error && <div>{error}</div>}
                     <button className={styles.button}>
                        <span className={styles.span}>{t('login')}</span>
                        <svg
                           className={styles.svg}
                           xmlns="http://www.w3.org/2000/svg"
                           width="17"
                           height="25"
                           viewBox="0 0 17 25"
                           fill="none"
                        >
                           <path
                              d="M17 12.5L0 25L0 3.52731e-05L17 12.5Z"
                              fill="#D91544"
                           />
                        </svg>
                     </button>
                  </form>
               </>
            );
         }
         case 'signin': {
            return (
               <>
                  <h3 className={styles.h3}>{t('signin')}</h3>
                  <form className={styles.form} onSubmit={handleSigninSubmit}>
                     <input
                        className={styles.input}
                        type="text"
                        placeholder={t('name-label')}
                        name="name"
                        onChange={handleChange}
                        required
                     />
                     <input
                        className={styles.input}
                        type="text"
                        placeholder={t('surname-label')}
                        name="surname"
                        onChange={handleChange}
                        required
                     />
                     <input
                        className={styles.input}
                        type="email"
                        placeholder="E-mail"
                        autoComplete="username"
                        name="email"
                        onChange={handleChange}
                        required
                     />
                     <input
                        className={styles.input}
                        type="password"
                        placeholder={t('password-label')}
                        autoComplete="new-password"
                        name="password"
                        onChange={handleChange}
                        required
                     />
                     <input
                        className={styles.input}
                        type="password"
                        placeholder={t('password-confirm-label')}
                        autoComplete="new-password"
                        name="confirmPassword"
                        onChange={handleChange}
                        required
                     />
                     {error && <div>{error}</div>}
                     <button className={styles.button}>
                        <span className={styles.span}>{t('signin')}</span>
                        <svg
                           className={styles.svg}
                           xmlns="http://www.w3.org/2000/svg"
                           width="17"
                           height="25"
                           viewBox="0 0 17 25"
                           fill="none"
                        >
                           <path
                              d="M17 12.5L0 25L0 3.52731e-05L17 12.5Z"
                              fill="#D91544"
                           />
                        </svg>
                     </button>
                  </form>
               </>
            );
         }
         default:
            return session ? (
               <>
                  <div>{session.user?.name}</div>
                  <div>{session.user?.email}</div>
                  <div
                     style={{ color: 'red', cursor: 'pointer' }}
                     onClick={() => signOut({ redirect: false })}
                  >
                     {t('signout')}
                  </div>
               </>
            ) : (
               <>
                  <div
                     className={styles.burgerBtn}
                     onClick={() => setSection('login')}
                  >
                     {t('login')}
                  </div>
                  <div
                     className={styles.burgerBtn}
                     onClick={() => setSection('signin')}
                  >
                     {t('signin')}
                  </div>
               </>
            );
      }
   };

   return <div className={styles.root}>{renderContent()}</div>;
}
