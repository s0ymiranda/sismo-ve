import { useState, useEffect } from 'react';
import { getSites } from '../services/sitesService';
import { WebSiteItem } from '../data/sites';

export const useSites = () => {
  const [sites, setSites] = useState<WebSiteItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; 

    const fetchDirectory = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const data = await getSites();
        
        if (isMounted) {
          setSites(data);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'FETCH_SITES_ERROR');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchDirectory();

    return () => {
      isMounted = false;
    };
  }, []);

  return { sites, isLoading, error };
};