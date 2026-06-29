'use client';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { SIDEBAR_ITEMS, CategoryId } from '../data/categories';

interface SidebarProps {
  activeCategory: CategoryId;
  setActiveCategory: (category: CategoryId) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({
  activeCategory,
  setActiveCategory,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  const tSidebar = useTranslations('Sidebar');
  const tCat = useTranslations('Categories');
  const tNav = useTranslations('Navigation');
  
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es';
    router.push(pathname.replace(`/${locale}`, `/${nextLocale}`));
  };

  return (
    <>
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 flex flex-col overflow-hidden transition-transform duration-300 ease-in-out
        bg-white/60 backdrop-blur-xl shadow-[4px_0_24px_rgba(0,0,0,0.1)] p-6
        md:relative md:transform-none md:w-64 md:h-fit md:bg-white/40 md:shadow-lg md:rounded-lg
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="font-pixel text-[11px] text-vzla-blue tracking-wider mb-6 border-b-2 border-vzla-dark/20 pb-2 uppercase flex justify-between items-center">
          <span>📁 {tSidebar('title')}</span>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-vzla-dark text-lg">
            {tSidebar('closeButton')}
          </button>
        </div>
        
        <nav className="flex flex-col gap-2 flex-1">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCategory(item.id);
                setIsSidebarOpen(false);
              }}
              className={`text-left border-2 px-3 py-3 font-pixel text-[10px] transition-all flex items-center gap-2 overflow-hidden whitespace-nowrap text-ellipsis rounded-sm ${
                activeCategory === item.id
                  ? 'bg-vzla-dark text-white border-vzla-dark translate-x-1 shadow-retro-sm'
                  : 'bg-white/50 text-vzla-dark border-transparent hover:bg-white'
              }`}
            >
              <span className="shrink-0">{item.icon}</span>
              <span className="truncate">{tCat(item.translationKey)}</span>
            </button>
          ))}
        </nav>

        <div className="mt-8 pt-4 border-t-2 border-vzla-dark/20">
          <button 
            onClick={toggleLanguage} 
            className="w-full arcade-btn bg-vzla-yellow text-vzla-dark border-4 border-vzla-dark shadow-retro-sm hover:bg-yellow-400 flex items-center justify-center gap-2"
          >
            <span>🌎</span> {tNav('changeLanguage')}
          </button>
        </div>
      </aside>
    </>
  );
}