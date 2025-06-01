'use client';

import Image from 'next/image';
import { withOptimizely, WithOptimizelyProps, useDecision } from '@optimizely/react-sdk';
import styles from '../styles/ProductCard.module.scss';

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  description?: string;
}

type AddToCartFlagVariables = {
  buttonText: string;
  buttonColor: string;
  buttonSize: string;
};

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product, optimizely }: ProductCardProps & WithOptimizelyProps) {
  const [decision] = useDecision('add_to_cart_button_test');
  const variables = decision.variables as AddToCartFlagVariables;

  const buttonText = variables?.buttonText || 'Add to Cart';
  const buttonColor = variables?.buttonColor || '#222';
  const buttonSize = variables?.buttonSize || '0.5rem 1.25rem';

  const handleClick = () => {
    if (!optimizely) return;

    optimizely.track('add_to_cart_click', {
      product_name: product.name,
      product_price: product.price,
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image_url}
          alt={product.name}
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{product.name}</h3>
        {product.description && <p className={styles.description}>{product.description}</p>}
        <p className={styles.price}>${product.price}</p>
      </div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonColor,
          color: '#fff',
          border: 'none',
          padding: buttonSize,
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {String(buttonText)}
      </button>
    </div>
  );
}

export default withOptimizely(ProductCard);

