import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();
console.log('✅ Products fetched:', data);
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log('✅ Products fetched:', data); // Console output
      setProducts(data);
    } catch (err) {
      console.error('❌ Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
