export type CategoryId = 
  | 'ALL' 
  | 'MISSING' 
  | 'CHILDREN' 
  | 'HOSPITALS'
  | 'DONATIONS' 
  | 'MAPS' 
  | 'PETS' 
  | 'VOLUNTEERING' 
  | 'REPORTS' 
  | 'ABOUT';

export interface SidebarItem {
  id: CategoryId;
  translationKey: string;
  icon: string;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 'ALL', translationKey: 'ALL', icon: '🌐' },
  { id: 'MISSING', translationKey: 'MISSING', icon: '🔍' },
  { id: 'CHILDREN', translationKey: 'CHILDREN', icon: '🧸' },
  { id: 'PETS', translationKey: 'PETS', icon: '🐾' },
  { id: 'HOSPITALS', translationKey: 'HOSPITALS', icon: '🏥' },
  { id: 'DONATIONS', translationKey: 'DONATIONS', icon: '❤️' },
  { id: 'VOLUNTEERING', translationKey: 'VOLUNTEERING', icon: '🤝' },
  { id: 'REPORTS', translationKey: 'REPORTS', icon: '⚠️' },
  { id: 'MAPS', translationKey: 'MAPS', icon: '🗺️' },
  { id: 'ABOUT', translationKey: 'ABOUT', icon: 'ℹ️' }
];