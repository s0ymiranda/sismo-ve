'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es';
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <nav className="w-full max-w-6xl mx-auto flex justify-between items-center p-4">
      <div className="flex gap-1">
        <span className="w-3 h-3 bg-vzla-yellow border-2 border-vzla-dark"></span>
        <span className="w-3 h-3 bg-vzla-blue border-2 border-vzla-dark"></span>
        <span className="w-3 h-3 bg-vzla-red border-2 border-vzla-dark"></span>
      </div>
      <button onClick={toggleLanguage} className="arcade-btn bg-white text-vzla-blue hover:bg-neutral-100">
        {t('changeLanguage')}
      </button>
    </nav>
  );
}