'use client';
import { useTranslations } from 'next-intl';
import { WebSiteItem } from '../data/sites';

interface DirectoryCardProps {
  site: WebSiteItem;
  currentLocale: string;
}

export default function DirectoryCard({ site, currentLocale }: DirectoryCardProps) {
  const t = useTranslations('Directory');
  const tCat = useTranslations('Categories');
  
  const description = currentLocale === 'es' ? site.descriptionEs : site.descriptionEn;

  return (
    <article className="arcade-window flex flex-col justify-between h-full bg-white border-4 border-vzla-dark overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-neutral-100">
          <span className="px-2 py-1 bg-vzla-dark text-white font-pixel text-[8px] tracking-widest uppercase">
            {tCat(site.category)}
          </span>
          {site.verified && (
            <span className="font-pixel text-[8px] text-green-600 font-bold flex items-center gap-1">
              ✓ {t('verified')}
            </span>
          )}
        </div>
        
        <h3 className="font-pixel text-[13px] text-vzla-dark mb-3 leading-tight tracking-normal uppercase font-bold break-words">
          {site.title}
        </h3>
        
        <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-sans mb-6 flex-1">
          {description}
        </p>
      </div>

      <a 
        href={site.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="arcade-btn bg-vzla-red text-white hover:bg-red-600 w-full mt-auto block"
      >
        {t('visit')}
      </a>
    </article>
  );
}