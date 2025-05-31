'use client';

import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.scss';

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  description?: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
