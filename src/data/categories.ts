export type CategoryId = 'ALL' | 'EMERGENCY' | 'DONATIONS' | 'MAPS' | 'NEWS' | 'VOLUNTEERING' | 'ABOUT';

export interface SidebarItem {
  id: CategoryId;
  translationKey: string;
  icon: string;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 'ALL', translationKey: 'ALL', icon: '🌐' },
  { id: 'EMERGENCY', translationKey: 'EMERGENCY', icon: '🚨' },
  { id: 'DONATIONS', translationKey: 'DONATIONS', icon: '❤️' },
  { id: 'MAPS', translationKey: 'MAPS', icon: '🗺️' },
  { id: 'NEWS', translationKey: 'NEWS', icon: '📰' },
  { id: 'VOLUNTEERING', translationKey: 'VOLUNTEERING', icon: '🤝' },
  { id: 'ABOUT', translationKey: 'ABOUT', icon: 'ℹ️' }
];