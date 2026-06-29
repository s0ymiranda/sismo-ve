'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import bannerImg from '../public/banner.webp';
import Sidebar from '../../components/Sidebar';
import DirectoryCard from '../../components/DirectoryCard';
import { DIRECTORY_DATA } from '../../data/sites';
import { CategoryId } from '../../data/categories';

export default function HomePage() {
  const t = useTranslations();
  const currentLocale = useLocale();
  
  const [activeCategory, setActiveCategory] = useState<CategoryId>('ALL');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const filteredSites = DIRECTORY_DATA.filter((site) => {
    return activeCategory === 'ALL' || site.category === activeCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-vzla-yellow">
      
      <header className="w-full bg-white/90 backdrop-blur-md border-b-4 border-vzla-dark p-3 md:p-4 flex justify-between items-center z-30 sticky top-0 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden font-pixel text-[12px] bg-vzla-blue text-white px-3 py-2 border-2 border-vzla-dark shadow-[2px_2px_0px_0px_#121212] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all"
          >
            {t('Sidebar.openButton')}
          </button>
          <div className="hidden md:flex gap-1.5">
            <div className="w-4 h-4 bg-vzla-yellow border-2 border-vzla-dark"></div>
            <div className="w-4 h-4 bg-vzla-blue border-2 border-vzla-dark"></div>
            <div className="w-4 h-4 bg-vzla-red border-2 border-vzla-dark"></div>
          </div>
        </div>
        
        <div className="flex gap-1.5 md:hidden">
            <div className="w-3 h-3 bg-vzla-yellow border-2 border-vzla-dark"></div>
            <div className="w-3 h-3 bg-vzla-blue border-2 border-vzla-dark"></div>
            <div className="w-3 h-3 bg-vzla-red border-2 border-vzla-dark"></div>
        </div>
      </header>

      <div className="w-full relative flex items-center justify-center border-b-4 border-vzla-dark overflow-hidden min-h-[250px] md:min-h-[350px] py-8 px-4">
        <img 
          src={bannerImg.src} 
          alt={t('Banner.alt')}
          className="absolute inset-0 w-full h-full object-cover object-center pixel-img z-0"
        />
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        <div className="relative z-20 w-11/12 max-w-fit arcade-window bg-white border-4 border-vzla-dark p-4 md:p-6 shadow-retro-lg text-center flex flex-col items-center -translate-y-6">
          <h1 className="font-pixel text-2xl md:text-4xl lg:text-5xl text-vzla-blue mb-2 tracking-tight">
            {t('Hero.mainTitle')}
          </h1>
          <p className="font-pixel text-[10px] md:text-xs text-vzla-red tracking-widest uppercase">
            {t('Hero.subtitle')}
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row w-full max-w-7xl mx-auto p-4 md:p-8 gap-6 md:gap-8 relative">
        
        <Sidebar 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="flex-1 flex flex-col w-full min-w-0">
          
          {activeCategory === 'ABOUT' ? (
            <section className="w-full max-w-3xl arcade-window bg-white border-4 border-vzla-dark p-6 md:p-8 shadow-retro-lg text-vzla-dark">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="shrink-0 w-20 h-20 bg-vzla-blue border-4 border-vzla-dark flex items-center justify-center text-3xl shadow-retro-sm rounded-sm">
                  🤝
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-pixel text-sm md:text-base text-vzla-blue mb-4 tracking-tighter uppercase">
                    {t('About.title')}
                  </h2>
                  <p className="font-sans text-sm md:text-base leading-relaxed text-neutral-700 mb-6 font-medium">
                    {t('About.description')}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <a 
                      href="https://discord.gg/KG4hnHfax" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="arcade-btn bg-[#5865F2] text-white border-2 border-vzla-dark text-[10px] px-4 py-3 hover:bg-[#4752C4] flex items-center gap-2"
                    >
                      <span className="text-sm">💬</span> {t('About.discordButton')}
                    </a>
                    
                    <a 
                      href="https://github.com/s0ymiranda/sismo-ve" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="arcade-btn bg-vzla-dark text-white border-2 border-vzla-dark text-[10px] px-4 py-3 hover:bg-neutral-800 flex items-center gap-2"
                    >
                      <span className="text-sm">💻</span> {t('About.githubButton')}
                    </a>

                  </div>
                </div>
              </div>
            </section>

          ) : (
            
            <div className="w-full">
              {filteredSites.length > 0 ? (
                <section className="grid grid-cols-1 xl:grid-cols-2 gap-5 w-full">
                  {filteredSites.map((site) => (
                    <DirectoryCard key={site.id} site={site} currentLocale={currentLocale} />
                  ))}
                </section>
              ) : (
                <div className="w-full max-w-md arcade-window bg-white border-4 border-vzla-dark p-10 md:p-12 text-center flex flex-col items-center justify-center shadow-retro-lg">
                  <span className="text-4xl mb-4 animate-bounce">⚠️</span>
                  <p className="font-pixel text-[10px] md:text-xs text-vzla-dark leading-relaxed">
                    {t('Directory.empty')}
                  </p>
                </div>
              )}
            </div>

          )}
          
        </main>
      </div>

      <footer className="w-full border-t-4 border-vzla-dark bg-vzla-dark text-white py-5 px-4 text-center font-mono text-[10px] md:text-xs z-10 mt-auto">
        <p>{t('Footer.copyright')}</p>
      </footer>
    </div>
  );
}