import { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data.slice(0, 6)))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow">
            <h3 className="font-bold text-lg">{p.title}</h3>
            <Card key={p.id} title={p.title} description={p.description.substring(0, 80) + '...'} />
            <p className="text-sm mt-2">{p.description.substring(0, 80)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;