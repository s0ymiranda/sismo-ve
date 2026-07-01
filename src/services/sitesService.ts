import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { WebSiteItem } from '../data/sites';

const CACHE_KEY = 'sismo_ve_sites_cache';
const CACHE_EXPIRATION_MS = 1000 * 60 * 30;

interface CacheData {
  timestamp: number;
  data: WebSiteItem[];
}

export const getSites = async (): Promise<WebSiteItem[]> => {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsedCache: CacheData = JSON.parse(cached);
      const isExpired = Date.now() - parsedCache.timestamp > CACHE_EXPIRATION_MS;
      
      if (!isExpired) {
        return parsedCache.data;
      }
    }

    const docRef = doc(db, 'directory', 'all_sites');
    const docSnap = await getDoc(docRef);

    let sitesData: WebSiteItem[] = [];

    if (docSnap.exists()) {
      const data = docSnap.data();
      sitesData = (data.sites || []) as WebSiteItem[];
    }

    sessionStorage.setItem(CACHE_KEY, JSON.stringify({
      timestamp: Date.now(),
      data: sitesData
    }));

    return sitesData;
  } catch (error) {
    throw new Error('FETCH_SITES_ERROR');
  }
};