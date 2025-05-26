import Image from 'next/image';
import styles from '../styles/ProductCard.module.scss';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image_url: string;
    description?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
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
      <h3 className={styles.title}>{product.name}</h3>
      {product.description && <p className={styles.description}>{product.description}</p>}
      <p className={styles.price}>${product.price.toString()}</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
}
