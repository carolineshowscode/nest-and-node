import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h4>About</h4>
        <p>Nest & Node curates artisan-quality homegoods with timeless appeal.</p>
      </div>

      <div className={styles.section}>
        <h4>Customer Care</h4>
        <ul>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/returns">Returns</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4>Connect</h4>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Pinterest</a></li>
          <li><a href="#">Newsletter</a></li>
        </ul>
      </div>
    </footer>
  );
}