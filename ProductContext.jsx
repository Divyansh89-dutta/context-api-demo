import { createContext, useEffect, useState } from 'react';

// Create context
export const ProductContext = createContext();

// Provider that shares products globally
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from fakestore API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log('✅ Products fetched:', data); // Debug
      setProducts(data);
    } catch (err) {
      console.error('❌ Failed to fetch products:', err);
    } finally {
      setLoading(false);
    }
  };

  // Run once when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Share state with children
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
