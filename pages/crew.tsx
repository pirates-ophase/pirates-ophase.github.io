import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Menu } from '../components/Menu'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crew</title>
        <meta name="description" content="An Bord Matrosen!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Crew
        </h1>

        <p className={styles.description}>
          Käpt'n, Matrosen und Tiere an Bord
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Käpt'n</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Erster Maat</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Schatzmeisterin</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Papagei</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Rick Astley</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>D. Knuth</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Statist 1</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Statist 2</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Niemand</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
