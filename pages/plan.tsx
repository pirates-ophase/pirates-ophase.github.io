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
        <title>Crew</title>
        <meta name="description" content="An Bord Matrosen!" />
      </Head>

      <h1 className={styles.title}>
        Wochenplan
      </h1>

      <p className={styles.description}>
        Wochentage und mehr
      </p>

      <div className={styles.grid}>
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Montag</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Dienstag</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Mittwoch</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Donnerstag</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Freitag</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Samstag</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Sonntag</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Semester 1</h2>
          </div>
        </NextLink>
        
        <NextLink href="/" className={styles.card}>
          <div>
            <Image src="/crew/pirate.jpg" width={128} height={128} alt="demo pirate image"/>
            <h2>Semester 2</h2>
          </div>
        </NextLink>
      </div>
    </Layout>
  )
}

export default Home
