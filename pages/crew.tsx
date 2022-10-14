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
        
        <h1 className={styles.title} style={{gridColumnStart: 4, gridRowStart: 4}}>
          Crew
        </h1>
        <p className={styles.description} style={{gridColumnStart: 5, gridColumnEnd: 20, gridRowStart: 5}}>
          Käpt&apos;n, Matrosen und Tiere an Bord
        </p>
        
        <div className={stylesCrew.crewGrid} >
        
        
          <PersonFrame src="/crew/crewmates/lena.jpg" frameSize="90px" frameStyle="frame2" gridColStart={40} gridColEnd={74} gridRowStart={1} gridRowEnd={40}/>
          <img src={'/crew/nametag2.png'} style={{width: '100%', height: '100%', gridColumnStart: 42, gridColumnEnd: 58, gridRowStart: 30, gridRowEnd: 40}}/>
          <PersonFrame src="/crew/crewmates/zoe.jpg" frameSize="30px" frameStyle="frame3" gridColStart={23} gridColEnd={35} gridRowStart={46} gridRowEnd={56}/>
          <PersonFrame src="/crew/crewmates/tobi.jpg" frameSize="35px" frameStyle="frame5" gridColStart={24} gridColEnd={36} gridRowStart={99} gridRowEnd={108}/>
          <PersonFrame src="/crew/crewmates/sarah.jpg" frameSize="40px" frameStyle="frame5" gridColStart={35} gridColEnd={49} gridRowStart={45} gridRowEnd={60}/>

          <PersonFrame src="/crew/crewmates/abdel.jpg" frameSize="39px" frameStyle="frame2" gridColStart={53} gridColEnd={63} gridRowStart={101} gridRowEnd={110}/>
          <PersonFrame src="/crew/crewmates/axel.jpg" frameSize="15px" frameStyle="frame3" gridColStart={16} gridColEnd={22} gridRowStart={117} gridRowEnd={123}/>
          <PersonFrame src="/crew/crewmates/benjamin.jpg" frameSize="30px" frameStyle="frame7" gridColStart={39} gridColEnd={54} gridRowStart={74} gridRowEnd={89}/>
          <PersonFrame src="/crew/crewmates/cedrico.jpg" frameSize="70px" frameStyle="frame3" gridColStart={58} gridColEnd={80} gridRowStart={70} gridRowEnd={90}/>
          <PersonFrame src="/crew/crewmates/chloe.jpg" frameSize="40px" frameStyle="frame4" gridColStart={20} gridColEnd={30} gridRowStart={152} gridRowEnd={162}/>
          <PersonFrame src="/crew/crewmates/christian.jpg" frameSize="40px" frameStyle="frame3" gridColStart={27} gridColEnd={40} gridRowStart={34} gridRowEnd={45}/>
          <PersonFrame src="/crew/crewmates/daniel.jpg" frameSize="25px" frameStyle="frame6" gridColStart={50} gridColEnd={63} gridRowStart={90} gridRowEnd={101}/>
          <PersonFrame src="/crew/crewmates/dimi.jpg" frameSize="60px" frameStyle="frame5" gridColStart={64} gridColEnd={79} gridRowStart={93} gridRowEnd={108}/>
          <PersonFrame src="/crew/crewmates/edwin.jpg" frameSize="35px" frameStyle="frame4" gridColStart={26} gridColEnd={34} gridRowStart={90} gridRowEnd={97}/>         
          <PersonFrame src="/crew/crewmates/gersti.jpg" frameSize="19px" frameStyle="frame2" gridColStart={2} gridColEnd={15} gridRowStart={157} gridRowEnd={169}/>
          <PersonFrame src="/crew/crewmates/jannes.jpg" frameSize="35px" frameStyle="frame1" gridColStart={26} gridColEnd={39} gridRowStart={20} gridRowEnd={34}/>
          <PersonFrame src="/crew/crewmates/jasmin.jpg" frameSize="25px" frameStyle="frame1" gridColStart={36} gridColEnd={50} gridRowStart={93} gridRowEnd={109}/>
          <PersonFrame src="/crew/crewmates/jonas.jpg" frameSize="30px" frameStyle="frame5" gridColStart={1} gridColEnd={10} gridRowStart={43} gridRowEnd={52}/>
          <PersonFrame src="/crew/crewmates/joschka_max.jpg" frameSize="180px" frameStyle="frame6" gridColStart={22} gridColEnd={75} gridRowStart={110} gridRowEnd={142}/>
          <PersonFrame src="/crew/crewmates/julian.jpg" frameSize="50px" frameStyle="frame2" gridColStart={5} gridColEnd={23} gridRowStart={88} gridRowEnd={110}/>
          <PersonFrame src="/crew/crewmates/lisa.jpg" frameSize="15px" frameStyle="frame4" gridColStart={48} gridColEnd={55} gridRowStart={66} gridRowEnd={74}/>
          <PersonFrame src="/crew/crewmates/luc.jpg" frameSize="20px" frameStyle="frame3" gridColStart={75} gridColEnd={85} gridRowStart={110} gridRowEnd={125}/>
          <PersonFrame src="/crew/crewmates/lukas.jpg" frameSize="15px" frameStyle="frame2" gridColStart={76} gridColEnd={85} gridRowStart={50} gridRowEnd={58}/>
          <PersonFrame src="/crew/crewmates/maria.jpg" frameSize="42px" frameStyle="frame7" gridColStart={3} gridColEnd={16} gridRowStart={112} gridRowEnd={125}/>
          <PersonFrame src="/crew/crewmates/mattis.jpg" frameSize="70px" frameStyle="frame6" gridColStart={64} gridColEnd={78} gridRowStart={143} gridRowEnd={156}/>
          <PersonFrame src="/crew/crewmates/mi.jpg" frameSize="46px" frameStyle="frame4" gridColStart={45} gridColEnd={62} gridRowStart={142} gridRowEnd={162}/>
          <PersonFrame src="/crew/crewmates/moritz.jpg" frameSize="54px" frameStyle="frame5" gridColStart={30} gridColEnd={45} gridRowStart={143} gridRowEnd={156}/>
          <PersonFrame src="/crew/crewmates/nala.jpg" frameSize="50px" frameStyle="frame6" gridColStart={50} gridColEnd={75} gridRowStart={40} gridRowEnd={65}/>
          <PersonFrame src="/crew/crewmates/pablo.jpg" frameSize="55px" frameStyle="frame4" gridColStart={3} gridColEnd={25} gridRowStart={22} gridRowEnd={43}/>
          <PersonFrame src="/crew/crewmates/pascal.jpg" frameSize="20px" frameStyle="frame2" gridColStart={10} gridColEnd={20} gridRowStart={12} gridRowEnd={22}/>
          <PersonFrame src="/crew/crewmates/paul.jpg" frameSize="20px" frameStyle="frame6" gridColStart={23} gridColEnd={40} gridRowStart={3} gridRowEnd={20}/>
          <PersonFrame src="/crew/crewmates/philipp_max_algebra.jpg" frameSize="90px" frameStyle="frame1" gridColStart={6} gridColEnd={35} gridRowStart={61} gridRowEnd={85}/>
          <PersonFrame src="/crew/crewmates/saad.jpg" frameSize="51px" frameStyle="frame6" gridColStart={5} gridColEnd={22} gridRowStart={125} gridRowEnd={140}/>
          <PersonFrame src="/crew/crewmates/simon_gurke.jpg" frameSize="50px" frameStyle="frame2" gridColStart={10} gridColEnd={23} gridRowStart={45} gridRowEnd={58}/>
          <PersonFrame src="/crew/crewmates/simon.jpg" frameSize="20px" frameStyle="frame2" gridColStart={35} gridColEnd={47} gridRowStart={63} gridRowEnd={74}/>
          <PersonFrame src="/crew/crewmates/stefan_lehmann.jpg" frameSize="25px" frameStyle="frame3" gridColStart={20} gridColEnd={30} gridRowStart={142} gridRowEnd={152}/>
          <PersonFrame src="/crew/crewmates/stefan_zilober.jpg" frameSize="65px" frameStyle="frame2" gridColStart={1} gridColEnd={20} gridRowStart={140} gridRowEnd={157}/>  
          <PersonFrame src="/crew/crewmates/ville.jpg" frameSize="10px" frameStyle="frame2" gridColStart={65} gridColEnd={70} gridRowStart={65} gridRowEnd={70}/>
          
          <PersonFrame src="/crew/crewmates/pirate.jpg" frameSize="10px" frameStyle="frame2" gridColStart={75} gridColEnd={85} gridRowStart={130} gridRowEnd={138}/> //yannik
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
