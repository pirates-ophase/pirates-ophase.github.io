import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Menu } from '../components/Menu'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Logbuch</title>
        <meta name="description" content="Es war einmal..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Logbuch
        </h1>

        <p className={styles.description}>
          O-Phase 2021
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Pirate beim Biertrinken</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Pirate beim Kochen</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Pirate beim Schifftransport</h2>
          </a>
        </div>
          
        <p className={styles.description}>
          O-Phase 2020
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Ich im Voicechat</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Du im Voicechat</h2>
          </a>
          
          <a href="/" className={styles.card}>
            <img src="/crew/pirate.jpg" width={128}/>
            <h2>Wir im Voicechat</h2>
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
