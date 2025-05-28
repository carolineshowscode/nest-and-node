'use client';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.scss';

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.productGrid}>
        <p>This is a test</p>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
