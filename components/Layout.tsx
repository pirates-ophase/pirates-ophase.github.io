import type { ReactNode } from 'react';
import Head from 'next/head';
import { Menu } from '../components/Menu'
import styles from '../styles/Home.module.css'
import { Footer } from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <main className={styles.main}>
        { children }
      </main>

      <Footer/>
    </div>
  );
}
