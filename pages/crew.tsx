import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Menu } from '../components/Menu'
import styles from '../styles/Home.module.css'
import stylesCrew from '../styles/Crew.module.css'
import { PersonFrame, PersonCardLargeFrame, PersonCardMediumFrame, PersonCardSmallFrame } from '../components/PersonFrame'
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
          Crew
        </h1>

        <p className={styles.description}>
          Käpt&apos;n, Matrosen und Tiere an Bord
        </p>

        <div className={stylesCrew.gridContainer} >
          
          <PersonFrame src="/crew/pirate.jpg" frameSize="50px" frameStyle="frame2" gridColStart={1} gridColEnd={10} gridRowStart={1} gridRowEnd={10}/>
          <PersonFrame src="/crew/pirate.jpg" frameSize="20px" frameStyle="frame4" gridColStart={15} gridColEnd={26} gridRowStart={10} gridRowEnd={35}/>
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
