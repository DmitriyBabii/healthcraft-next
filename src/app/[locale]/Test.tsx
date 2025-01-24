import { useTranslations } from 'next-intl';

export default function Test() {
   const t = useTranslations('Header');

   return <div>{t('food-link')}</div>;
}
