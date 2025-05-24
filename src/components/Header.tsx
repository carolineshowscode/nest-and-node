import Link from 'next/link';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Nest & Node</div>
      <nav className={styles.nav}>
        <Link href="/">
          <span className={styles.link}>Home</span>
        </Link>
        <Link href="/cart">
          <span className={styles.link}>Cart</span>
        </Link>
      </nav>
    </header>
  );
}