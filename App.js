import { ProductProvider } from './ProductContext';
import ProductList from './components/ProductList';

function App() {
  return (
    <ProductProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold text-gray-800">🛒 FakeStore Product Showcase</h1>
          <p className="text-gray-500 mt-2">Built with React + Context API</p>
        </header>
        <ProductList />
      </div>
    </ProductProvider>
  );
}

export default App;
