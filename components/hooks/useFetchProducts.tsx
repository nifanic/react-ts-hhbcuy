import { useEffect, useState } from 'react';

import { Product } from '../../types';

type UseFetchProducts = (
  query?: string
) => [products: Product[], isLoading?: boolean, isError?: boolean];

const FETCH_URL = 'https://fakestoreapi.com/products';

export const useFetchProducts: UseFetchProducts = (query) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const ifQuery = query ? `?query=${query}` : '';
        const response = await fetch(FETCH_URL + ifQuery);
        const data: Product[] = await response.json();

        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  return [products, isLoading, isError];
};
