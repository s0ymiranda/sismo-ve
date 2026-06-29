import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'es'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locales.includes(locale as any)) notFound();

  return {
    locale, 
    messages: (await import(`./src/locales/${locale}.json`)).default
  };
});