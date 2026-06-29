import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Press_Start_2P, Share_Tech_Mono } from 'next/font/google';
import { Metadata } from 'next';
import '../styles/global.css';

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
});

const monoFont = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://sismovenezuela.org'), 
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'es': '/es',
        'en': '/en',
        'x-default': '/es'
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale === 'es' ? 'es_VE' : 'en_US',
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${pixelFont.variable} ${monoFont.variable}`}>
      <body className="bg-vzla-yellow font-retroMono text-vzla-dark min-h-screen antialiased selection:bg-vzla-blue selection:text-white">
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col justify-between">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}