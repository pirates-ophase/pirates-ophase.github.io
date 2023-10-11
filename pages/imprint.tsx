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
<<<<<<< HEAD
          76133 Karlsruhe <br></br>
          <a href="mailto:hsg@asta-kit.de?subject=Pirates O-Phasengruppe">hsg@asta-kit.edu</a>
=======
          76133 Karlsruhe
>>>>>>> ac7221c (added imprint)
        </p>

        <p className={styles.description}>
          Wir freuen uns auch dieses Jahr wieder von unseren 
<<<<<<< HEAD
          Sponsoren mit Nahrung, Goodies und finanziellen Mitteln versorgt worden zu sein.
          Vielen Dank dafür an <NextLink href="https://www.andrena.de/">Andrena Objects</NextLink>, <NextLink href="https://www.billy-boy.de/">Billy Boy</NextLink> und die <NextLink href="https://www.badische-backstub.de/">Badische Backstub</NextLink>.
        </p>

        <p className={styles.description}>
          Vielen Dank auch an <NextLink href="https://www.linkedin.com/in/julie-elena-beck/">Julie Beck</NextLink> für unser diesjähriges Logo.
        </p>

        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

        <p className={styles.disclaimer}>
        Mit Urteil vom 12. Mai 1998 - 312 O 85/98 - "Haftung für Links" hat das Landgericht (LG) Hamburg entschieden, dass man durch das Setzen eines Links, die Inhalte der gelinkten Seite ggf. mit zu verantworten hat. Dies kann - so das LG - nur dadurch verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert. Hiermit distanzieren wir uns ausdrücklich von den verlinkten Seiten.
=======
          Sponsoren mit Nahrung und finanziellen Mitteln versorgt worden zu sein.
          Vielen Dank an <NextLink href="https://www.andrena.de/">Andrena Objects</NextLink> und die <NextLink href="https://www.badische-backstub.de/">Badische Backstub</NextLink>.
>>>>>>> ac7221c (added imprint)
        </p>
      </section>
    </Layout>
  );
};

export default Home;
