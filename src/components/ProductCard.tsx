import styles from '../styles/ProductCard.module.scss';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}></div>
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
}