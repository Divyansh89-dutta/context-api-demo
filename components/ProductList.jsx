import { useContext } from 'react';
import { ProductContext } from '../ProductContext';

const ProductList = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) return <p className="text-center text-xl py-10">Loading products...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain p-6 bg-gray-50"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold line-clamp-2">{product.title}</h2>
              <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>

              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${product.price}</span>
                <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
