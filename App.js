import { ProductProvider } from './ProductContext';
import ProductList from './components/ProductList';

function App() {
  return (
    <ProductProvider>
      <h1 className="text-center text-3xl font-bold my-6">🛍️ Product Showcase</h1>
      <ProductList />
    </ProductProvider>
  );
}

export default App;
