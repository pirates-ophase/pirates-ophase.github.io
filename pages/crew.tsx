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
          <PersonFrame src="/crew/people/lena.jpg" frameSize="90px" frameStyle="frame2" gridColStart={40} gridColEnd={74} gridRowStart={1} gridRowEnd={40}/>
          <PersonFrame src="/crew/people/zoe.jpg" frameSize="30px" frameStyle="frame3" gridColStart={23} gridColEnd={35} gridRowStart={46} gridRowEnd={56}/>
          <PersonFrame src="/crew/people/tobi.jpg" frameSize="35px" frameStyle="frame5" gridColStart={24} gridColEnd={36} gridRowStart={99} gridRowEnd={108}/>
          <PersonFrame src="/crew/people/sarah.jpg" frameSize="40px" frameStyle="frame5" gridColStart={35} gridColEnd={49} gridRowStart={45} gridRowEnd={60}/>
          <PersonFrame src="/crew/people/abdel.jpg" frameSize="39px" frameStyle="frame2" gridColStart={53} gridColEnd={63} gridRowStart={101} gridRowEnd={110}/>
          <PersonFrame src="/crew/people/axel.jpg" frameSize="15px" frameStyle="frame3" gridColStart={16} gridColEnd={22} gridRowStart={116} gridRowEnd={123}/>
          <PersonFrame src="/crew/people/benjamin.jpg" frameSize="30px" frameStyle="frame7" gridColStart={39} gridColEnd={54} gridRowStart={74} gridRowEnd={89}/>
          <PersonFrame src="/crew/people/cedrico.jpg" frameSize="70px" frameStyle="frame3" gridColStart={58} gridColEnd={80} gridRowStart={70} gridRowEnd={90}/>
          <PersonFrame src="/crew/people/christian.jpg" frameSize="40px" frameStyle="frame3" gridColStart={27} gridColEnd={40} gridRowStart={34} gridRowEnd={45}/>
          <PersonFrame src="/crew/people/daniel.jpg" frameSize="25px" frameStyle="frame6" gridColStart={50} gridColEnd={63} gridRowStart={90} gridRowEnd={101}/>
          <PersonFrame src="/crew/people/dimi.jpg" frameSize="60px" frameStyle="frame5" gridColStart={64} gridColEnd={79} gridRowStart={93} gridRowEnd={108}/>
          <PersonFrame src="/crew/people/edwin.jpg" frameSize="30px" frameStyle="frame4" gridColStart={26} gridColEnd={34} gridRowStart={90} gridRowEnd={97}/>
          <PersonFrame src="/crew/people/jasmin.jpg" frameSize="25px" frameStyle="frame1" gridColStart={36} gridColEnd={50} gridRowStart={93} gridRowEnd={109}/>
          <PersonFrame src="/crew/people/joschka_max.jpg" frameSize="180px" frameStyle="frame6" gridColStart={22} gridColEnd={75} gridRowStart={110} gridRowEnd={142}/>
          <PersonFrame src="/crew/people/julian.jpg" frameSize="50px" frameStyle="frame2" gridColStart={5} gridColEnd={23} gridRowStart={88} gridRowEnd={110}/>
          <PersonFrame src="/crew/people/lisa.jpg" frameSize="15px" frameStyle="frame4" gridColStart={48} gridColEnd={55} gridRowStart={66} gridRowEnd={74}/>
          <PersonFrame src="/crew/people/maria.jpg" frameSize="42px" frameStyle="frame7" gridColStart={3} gridColEnd={16} gridRowStart={112} gridRowEnd={125}/>
          <PersonFrame src="/crew/people/mattis.jpg" frameSize="70px" frameStyle="frame6" gridColStart={64} gridColEnd={78} gridRowStart={143} gridRowEnd={156}/>
          <PersonFrame src="/crew/people/mi.jpg" frameSize="46px" frameStyle="frame4" gridColStart={45} gridColEnd={62} gridRowStart={142} gridRowEnd={158}/>
          <PersonFrame src="/crew/people/moritz.jpg" frameSize="54px" frameStyle="frame5" gridColStart={30} gridColEnd={45} gridRowStart={143} gridRowEnd={156}/>
          <PersonFrame src="/crew/people/nala.jpg" frameSize="50px" frameStyle="frame6" gridColStart={50} gridColEnd={75} gridRowStart={40} gridRowEnd={65}/>
          <PersonFrame src="/crew/people/pablo.jpg" frameSize="55px" frameStyle="frame4" gridColStart={3} gridColEnd={25} gridRowStart={22} gridRowEnd={43}/>
          <PersonFrame src="/crew/people/philipp_max_algebra.jpg" frameSize="90px" frameStyle="frame1" gridColStart={6} gridColEnd={35} gridRowStart={58} gridRowEnd={87}/>
          <PersonFrame src="/crew/people/saad.jpg" frameSize="51px" frameStyle="frame6" gridColStart={5} gridColEnd={22} gridRowStart={125} gridRowEnd={140}/>
          <PersonFrame src="/crew/people/simon_gurke.jpg" frameSize="50px" frameStyle="frame2" gridColStart={10} gridColEnd={23} gridRowStart={45} gridRowEnd={58}/>
          <PersonFrame src="/crew/people/simon.jpg" frameSize="20px" frameStyle="frame2" gridColStart={35} gridColEnd={47} gridRowStart={63} gridRowEnd={74}/>
          <PersonFrame src="/crew/people/stefan_lehmann.jpg" frameSize="25px" frameStyle="frame3" gridColStart={20} gridColEnd={30} gridRowStart={142} gridRowEnd={152}/>
          <PersonFrame src="/crew/people/stefan_zilober.jpg" frameSize="65px" frameStyle="frame2" gridColStart={1} gridColEnd={20} gridRowStart={140} gridRowEnd={160}/>
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
