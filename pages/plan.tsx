import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Menu } from '../components/Menu'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link'

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
