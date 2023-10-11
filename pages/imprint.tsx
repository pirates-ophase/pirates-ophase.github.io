import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import styles from '../styles/Home.module.css'
import stylesCrew from '../styles/Crew.module.css'
import { ImageFrame } from '../components/ImageFrame'
import Layout from "../components/Layout";
import Image from "next/image";
import crewImage from '../public/pirates.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Impressum</title>
        <meta name="description" content="Pirates O-Phasengruppe - Impressum" />
      </Head>

      <section className={styles.content}>
        <h1 className={styles.title}>
          Impressum
        </h1>

        <p className={styles.centeredDescription}>
          Pirates O-Phasengruppe <br></br>
          c/o AStA am KIT <br></br>
          Adenauerring 7 <br></br>
          76133 Karlsruhe
        </p>

        <p className={styles.description}>
          Wir freuen uns auch dieses Jahr wieder von unseren 
          Sponsoren mit Nahrung und finanziellen Mitteln versorgt worden zu sein.
          Vielen Dank an <NextLink href="https://www.andrena.de/">Andrena Objects</NextLink> und die <NextLink href="https://www.badische-backstub.de/">Badische Backstub</NextLink>.
        </p>
      </section>
    </Layout>
  );
};

export default Home;
