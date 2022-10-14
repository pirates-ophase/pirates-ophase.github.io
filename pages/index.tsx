import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import styles from '../styles/Home.module.css'
import { PersonFrame } from '../components/PersonFrame'
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Pirates - Ahoy!</title>
        <meta name="description" content="Pirates O-Phasengruppe - Ahoy!" />
      </Head>

      <section className={styles.content}>
        <h1 className={styles.title}>
          Ahoy Matrosen!
        </h1>
        
        <div className={styles.image}>
          <PersonFrame
            src="/pirates.png"
            frameSize='4.5rem'
            frameStyle='frame2'
            gridColEnd={1}
            gridColStart={1}
            gridRowEnd={1}
            gridRowStart={1}/>
        </div>

        <p className={styles.description}>
          Wir sind die Pirates, die beste&trade; der dreizehn O-Phasengruppen
          für Mathe- und Informatikstudenten am KIT.
          Mit uns erwartet euch eine aufregende Woche, nach der ihr garantiert
          bereit seid, die Uni zu entern.
        </p>

        <p className={styles.description}>
          Dieses Jahr zeigen wir euch unseren Heimathafen Z10, führen euch
          über den Campus und durch die Stadt und bei unserem Cocktailabend
          könnt ihr sogar einen Schatz finden 💰🕵️.
          Wir gehen außerdem mit euch Lasertag spielen und machen eine
          Kneipentour und einen Grillabend und und und...
        </p>

        <p className={styles.description}>
          Doch auch nach der O-Phase kommt die Crew immer wieder zusammen, um
          die eine oder andere Buddel Rum zu leeren.
          Kommt gerne bei unseren monatlichen Stammtischen vorbei!
        </p>

        <p className={styles.description}>
          Wir freuen uns auf euch. Yohoho!
        </p>

        <ul className={styles.description}>
          <li><a href="https://www.instagram.com/kit_pirates/">Instagrrrram &rarr;</a></li>
          <li><NextLink href="/plan">Wochenplan 2022 &rarr;</NextLink></li>
          <li><a href="https://o-phase.com">Allgemeine O-Phasen Infos der Fachschaft &rarr;</a></li>
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
