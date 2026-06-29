'use client';
import { useTranslations } from 'next-intl';
import { WebSiteItem } from '../data/sites';
import { SIDEBAR_ITEMS } from '../data/categories';

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
        
        <div className="flex justify-between items-start mb-4 pb-3 border-b-2 border-neutral-100 gap-2">
          <div className="flex flex-wrap gap-2">
            {site.categories.map((cat) => {
              const iconObj = SIDEBAR_ITEMS.find(item => item.id === cat);
              const icon = iconObj ? iconObj.icon : '📌';

              return (
                <span 
                  key={cat}
                  title={tCat(cat)} 
                  className="flex items-center justify-center w-8 h-8 bg-white border-2 border-vzla-dark shadow-[2px_2px_0px_0px_#121212] text-sm cursor-help hover:scale-110 transition-transform"
                >
                  {icon}
                </span>
              );
            })}
          </div>
          
          {site.verified && (
            <span className="shrink-0 font-pixel text-[8px] text-green-600 font-bold flex items-center gap-1 mt-1">
              ✓ {t('verified')}
            </span>
          )}
        </div>
        
        <h3 className="font-sans text-[15px] text-vzla-dark leading-tight tracking-normal uppercase font-bold break-words mb-3">
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
        className="arcade-btn bg-vzla-red text-white hover:bg-red-600 w-full mt-auto block text-center"
      >
        {t('visit')}
      </a>
    </article>
  );
}