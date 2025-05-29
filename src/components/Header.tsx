'use client';

import Link from 'next/link';
import { useDecision } from '@optimizely/react-sdk';
import stylesDefault from '@/styles/Header.module.scss';
import stylesRebrand from '@/styles/HeaderRebrand.module.scss';

export default function Header() {
  const [decision, clientReady] = useDecision('rebrand');
  const styles = clientReady && decision.enabled ? stylesRebrand : stylesDefault;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Nest & Node
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

