import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Logbuch</title>
        <meta name="description" content="Es war einmal..." />
      </Head>

      <h1 className={styles.title}>
        Logbuch
      </h1>

      <p className={styles.description}>
        O-Phase 2021
      </p>

      <div className={styles.grid}>
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Pirate beim Biertrinken</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Pirate beim Kochen</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Pirate beim Schifftransport</h2>
          </div>
        </NextLink>
      </div>
        
      <p className={styles.description}>
        O-Phase 2020
      </p>

      <div className={styles.grid}>
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Ich im Voicechat</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Du im Voicechat</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Wir im Voicechat</h2>
          </div>
        </NextLink>
      </div>
    </Layout>
  )
}

export default Home
