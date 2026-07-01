import { CategoryId } from './categories';

export interface WebSiteItem {
  id: string;
  title: string;
  descriptionEs: string;
  descriptionEn: string;
  url: string;
  categories: Exclude<CategoryId, 'ALL' | 'ABOUT'>[];
  verified: boolean;

  isActive: boolean; 
  createdAt: number;
}