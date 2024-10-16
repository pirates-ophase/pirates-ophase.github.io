import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import stylesCrew from '../styles/Crew.module.css'
import { ImageFrame } from '../components/ImageFrame'
import { NameTag } from '../components/NameTag'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Crew</title>
        <meta name="description" content="An Bord Matrosen!" />
      </Head>

      <section className={styles.content}>
        <h1 className={styles.title} style={{gridColumnStart: 4, gridRowStart: 4}}>
          Crew
        </h1>
        <p className={styles.description} style={{gridColumnStart: 5, gridColumnEnd: 20, gridRowStart: 5}}>
          Käpt&apos;n und Matrosen*Innen an Bord
        </p>
      </section>
      
      <div style={{maxWidth: '100%', overflowY: 'auto', overflowX: 'scroll'}}>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/crew/crewmates_mid_res/pablo2.jpg" frameSize="90px" frameStyle="frame2" gridColStart={40} gridColEnd={74} gridRowStart={1} gridRowEnd={36}/>
          <NameTag name={'Käpt\'n Pablo'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"300%"} fontSizeBottom={"100%"} gridColStart={42} gridColEnd={60} gridRowStart={30} gridRowEnd={38}/>

          <ImageFrame src="/crew/crewmates_mid_res/zoe.jpg" frameSize="30px" frameStyle="frame3" gridColStart={23} gridColEnd={35} gridRowStart={46} gridRowEnd={58}/>
          <NameTag name={'Zoe'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"170%"} fontSizeBottom={"58%"} gridColStart={23} gridColEnd={32} gridRowStart={55} gridRowEnd={60}/>

          <ImageFrame src="/crew/crewmates_mid_res/tobi.jpg" frameSize="35px" frameStyle="frame5" gridColStart={24} gridColEnd={36} gridRowStart={99} gridRowEnd={108}/>
          <NameTag name={'Tobi'} fieldOfStudy={'Informatik Master'} semesterNmbr={5} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={24} gridColEnd={33} gridRowStart={105} gridRowEnd={110}/>

          <ImageFrame src="/crew/crewmates_mid_res/sarah.jpg" frameSize="40px" frameStyle="frame5" gridColStart={35} gridColEnd={49} gridRowStart={45} gridRowEnd={60}/>
          <NameTag name={'Sarah'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"170%"} fontSizeBottom={"60%"} gridColStart={38} gridColEnd={49} gridRowStart={55} gridRowEnd={60}/>
          
          <ImageFrame src="/crew/crewmates_mid_res/axel.jpg" frameSize="15px" frameStyle="frame3" gridColStart={16} gridColEnd={22} gridRowStart={117} gridRowEnd={123}/>
          <NameTag name={'Axel'} fieldOfStudy={'Informatik Master'} semesterNmbr={4} fontSizeTop={"99%"} fontSizeBottom={"50%"} gridColStart={16} gridColEnd={22} gridRowStart={122} gridRowEnd={125}/>

          <ImageFrame src="/crew/crewmates_mid_res/benjamin.jpg" frameSize="30px" frameStyle="frame7" gridColStart={39} gridColEnd={54} gridRowStart={74} gridRowEnd={89}/>
          <NameTag name={'Benni'} fieldOfStudy={'Informatik Master'} semesterNmbr={2} fontSizeTop={"110%"} fontSizeBottom={"60%"} gridColStart={42} gridColEnd={54} gridRowStart={85} gridRowEnd={89}/>

          <ImageFrame src="/crew/crewmates_mid_res/cedrico.jpg" frameSize="70px" frameStyle="frame3" gridColStart={58} gridColEnd={80} gridRowStart={70} gridRowEnd={90}/>
          <NameTag name={'Cedrico'} fieldOfStudy={'Informatik Master'} semesterNmbr={4} fontSizeTop={"150%"} fontSizeBottom={"60%"} gridColStart={58} gridColEnd={70} gridRowStart={85} gridRowEnd={90}/>

          <ImageFrame src="/crew/crewmates_mid_res/christian.jpg" frameSize="40px" frameStyle="frame3" gridColStart={3} gridColEnd={23} gridRowStart={3} gridRowEnd={22}/>
          <NameTag name={'Chefkoch Christian'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={9} fontSizeTop={"120%"} fontSizeBottom={"55%"} gridColStart={3} gridColEnd={12} gridRowStart={3} gridRowEnd={8}/>

          <ImageFrame src="/crew/crewmates_mid_res/daniel.jpg" frameSize="25px" frameStyle="frame6" gridColStart={50} gridColEnd={63} gridRowStart={90} gridRowEnd={104}/>
          <NameTag name={'Dani'} fieldOfStudy={'Bürgergeld'} semesterNmbr={1} fontSizeTop={"160%"} fontSizeBottom={"55%"} gridColStart={57} gridColEnd={64} gridRowStart={96} gridRowEnd={101}/>

          <ImageFrame src="/crew/crewmates_mid_res/dimi.jpg" frameSize="60px" frameStyle="frame5" gridColStart={64} gridColEnd={79} gridRowStart={93} gridRowEnd={108}/>
          <NameTag name={'Dimi'} fieldOfStudy={'Mathematik Master'} semesterNmbr={4} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={64} gridColEnd={74} gridRowStart={103} gridRowEnd={108}/>

          <ImageFrame src="/crew/crewmates_mid_res/edwin.jpg" frameSize="60px" frameStyle="frame5" gridColStart={74} gridColEnd={85} gridRowStart={22} gridRowEnd={32}/>
          <NameTag name={'Edwin'} fieldOfStudy={'Informatik Master'} semesterNmbr={8} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={74} gridColEnd={81} gridRowStart={28} gridRowEnd={32}/>

          <ImageFrame src="/crew/crewmates_mid_res/jannes.jpg" frameSize="35px" frameStyle="frame1" gridColStart={26} gridColEnd={39} gridRowStart={20} gridRowEnd={44}/>
          <NameTag name={'Jannes'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={"(7+4i)"} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={26} gridColEnd={33} gridRowStart={30} gridRowEnd={34}/>

          <ImageFrame src="/crew/crewmates_mid_res/jonas.jpg" frameSize="30px" frameStyle="frame5" gridColStart={1} gridColEnd={10} gridRowStart={43} gridRowEnd={52}/>
          <NameTag name={'Jonas'} fieldOfStudy={'Informatik Master'} semesterNmbr={7} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={1} gridColEnd={10} gridRowStart={43} gridRowEnd={46}/>

          <ImageFrame src="/crew/crewmates_mid_res/joschka_max.jpg" frameSize="90px" frameStyle="frame6" gridColStart={22} gridColEnd={75} gridRowStart={110} gridRowEnd={142}/>
          <NameTag name={'Max'} fieldOfStudy={'Informatik Master'} semesterNmbr={5} fontSizeTop={"200%"} fontSizeBottom={"100%"} gridColStart={32} gridColEnd={48} gridRowStart={137} gridRowEnd={143}/>
          <NameTag name={'Joschka'} fieldOfStudy={'Informatik Master'} semesterNmbr={3} fontSizeTop={"200%"} fontSizeBottom={"100%"} gridColStart={52} gridColEnd={70} gridRowStart={137} gridRowEnd={143}/>

          <ImageFrame src="/crew/crewmates_mid_res/julian.jpg" frameSize="50px" frameStyle="frame2" gridColStart={5} gridColEnd={23} gridRowStart={88} gridRowEnd={110}/>
          <NameTag name={'Julian'} fieldOfStudy={'Mathematik PhD'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={5} gridColEnd={17} gridRowStart={90} gridRowEnd={95}/>

          <ImageFrame src="/crew/crewmates_mid_res/kevin.jpg" frameSize="20px" frameStyle="frame4" gridColStart={69} gridColEnd={79} gridRowStart={58} gridRowEnd={66}/>
          <NameTag name={'Kevin'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"120%"} fontSizeBottom={"55%"} gridColStart={73} gridColEnd={82} gridRowStart={64} gridRowEnd={68}/>

          <ImageFrame src="/crew/crewmates_mid_res/lena.jpg" frameSize="55px" frameStyle="frame4" gridColStart={3} gridColEnd={25} gridRowStart={22} gridRowEnd={43}/>
          <NameTag name={'Lena'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"220%"} fontSizeBottom={"90%"} gridColStart={1} gridColEnd={12} gridRowStart={22} gridRowEnd={28}/>

          <ImageFrame src="/crew/crewmates_mid_res/lisa.jpg" frameSize="15px" frameStyle="frame4" gridColStart={48} gridColEnd={58} gridRowStart={63} gridRowEnd={74}/>
          <NameTag name={'Lisa'} fieldOfStudy={'Informatik Master'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={51} gridColEnd={58} gridRowStart={70} gridRowEnd={74}/>

          <ImageFrame src="/crew/crewmates_mid_res/luc.jpg" frameSize="20px" frameStyle="frame3" gridColStart={75} gridColEnd={85} gridRowStart={110} gridRowEnd={125}/>
          <NameTag name={'LUC'} fieldOfStudy={'Wissenschaft-Medien-Kommunikation Bachelor'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"50%"} gridColStart={75} gridColEnd={81} gridRowStart={120} gridRowEnd={125}/>

          <ImageFrame src="/crew/crewmates_mid_res/pirate.jpg" frameSize="25px" frameStyle="frame2" gridColStart={68} gridColEnd={85} gridRowStart={42} gridRowEnd={58}/>
          <NameTag name={'Lea'} fieldOfStudy={'Informatik Master'} semesterNmbr={7} fontSizeTop={"150%"} fontSizeBottom={"50%"} gridColStart={77} gridColEnd={85} gridRowStart={52} gridRowEnd={56}/>

          <ImageFrame src="/crew/crewmates_mid_res/maria.jpg" frameSize="42px" frameStyle="frame7" gridColStart={3} gridColEnd={16} gridRowStart={112} gridRowEnd={125}/>
          <NameTag name={'Maria'} fieldOfStudy={'Ehem. Info'} semesterNmbr={0} fontSizeTop={"200%"} fontSizeBottom={"0%"} gridColStart={4} gridColEnd={13} gridRowStart={121} gridRowEnd={125}/>

          <ImageFrame src="/crew/crewmates_mid_res/mattis.jpg" frameSize="70px" frameStyle="frame6" gridColStart={64} gridColEnd={78} gridRowStart={143} gridRowEnd={156}/>
          <NameTag name={'Schatzmeister Mattis'} fieldOfStudy={'Informatik Master'} semesterNmbr={4} fontSizeTop={"200%"} fontSizeBottom={"50%"} gridColStart={70} gridColEnd={83} gridRowStart={152} gridRowEnd={158}/>

          <ImageFrame src="/crew/crewmates_mid_res/mi.jpg" frameSize="46px" frameStyle="frame4" gridColStart={45} gridColEnd={62} gridRowStart={145} gridRowEnd={162}/>
          <NameTag name={'Mi'} fieldOfStudy={'Ehem. Bio'} semesterNmbr={0} fontSizeTop={"300%"} fontSizeBottom={"0%"} gridColStart={55} gridColEnd={62} gridRowStart={155} gridRowEnd={162}/>

          <ImageFrame src="/crew/crewmates_mid_res/moritz.jpg" frameSize="54px" frameStyle="frame5" gridColStart={30} gridColEnd={45} gridRowStart={143} gridRowEnd={160}/>
          <NameTag name={'Moritz'} fieldOfStudy={'Ehem. Info'} semesterNmbr={0} fontSizeTop={"250%"} fontSizeBottom={"0%"} gridColStart={35} gridColEnd={45} gridRowStart={158} gridRowEnd={163}/>

          <ImageFrame src="/crew/crewmates_mid_res/pascal.jpg" frameSize="20px" frameStyle="frame2" gridColStart={51} gridColEnd={58} gridRowStart={104} gridRowEnd={110}/>
          <NameTag name={'Pascal'} fieldOfStudy={'Informatik Master'} semesterNmbr={6} fontSizeTop={"110%"} fontSizeBottom={"60%"} gridColStart={54} gridColEnd={61} gridRowStart={106} gridRowEnd={110}/>

          <ImageFrame src="/crew/crewmates_mid_res/paul.jpg" frameSize="20px" frameStyle="frame6" gridColStart={23} gridColEnd={40} gridRowStart={6} gridRowEnd={17}/>
          <NameTag name={'Papamat Mamagei Paul'} fieldOfStudy={'Informatik Master'} semesterNmbr={1} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={30} gridColEnd={40} gridRowStart={2} gridRowEnd={10}/>

          <ImageFrame src="/crew/crewmates_mid_res/philipp_max_algebra.jpg" frameSize="90px" frameStyle="frame1" gridColStart={6} gridColEnd={35} gridRowStart={61} gridRowEnd={85}/>
          <NameTag name={'Philipp'} fieldOfStudy={'Bürgergeld'} semesterNmbr={1} fontSizeTop={"200%"} fontSizeBottom={"70%"} gridColStart={4} gridColEnd={12} gridRowStart={68} gridRowEnd={76}/>
          <NameTag name={'Max'} fieldOfStudy={'Informatik Master'} semesterNmbr={1} fontSizeTop={"200%"} fontSizeBottom={"70%"} gridColStart={27} gridColEnd={35} gridRowStart={69} gridRowEnd={77}/>
          <NameTag name={'Algebra'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"200%"} fontSizeBottom={"70%"} gridColStart={22} gridColEnd={30} gridRowStart={79} gridRowEnd={87}/>

          <ImageFrame src="/crew/crewmates_mid_res/saad.jpg" frameSize="51px" frameStyle="frame6" gridColStart={5} gridColEnd={22} gridRowStart={125} gridRowEnd={140}/>
          <NameTag name={'Saad'} fieldOfStudy={'Informatik Master'} semesterNmbr={4} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={2} gridColEnd={10} gridRowStart={132} gridRowEnd={140}/>

          <ImageFrame src="/crew/crewmates_mid_res/simon_gurke.jpg" frameSize="50px" frameStyle="frame2" gridColStart={10} gridColEnd={23} gridRowStart={45} gridRowEnd={58}/>
          <NameTag name={'Simon'} fieldOfStudy={'Mathematik Bachelor'} semesterNmbr={2} fontSizeTop={"170%"} fontSizeBottom={"60%"} gridColStart={16} gridColEnd={23} gridRowStart={55} gridRowEnd={60}/>

          <ImageFrame src="/crew/crewmates_mid_res/simon.jpg" frameSize="20px" frameStyle="frame2" gridColStart={35} gridColEnd={47} gridRowStart={63} gridRowEnd={74}/>
          <NameTag name={'Simon'} fieldOfStudy={'Technomathematik Master'} semesterNmbr={3} fontSizeTop={"130%"} fontSizeBottom={"60%"} gridColStart={42} gridColEnd={49} gridRowStart={60} gridRowEnd={65}/>

          <ImageFrame src="/crew/crewmates_mid_res/stefan_lehmann.jpg" frameSize="25px" frameStyle="frame3" gridColStart={20} gridColEnd={30} gridRowStart={142} gridRowEnd={152}/>
          <NameTag name={'Stefan'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={25} gridColEnd={33} gridRowStart={140} gridRowEnd={145}/>

          <ImageFrame src="/crew/crewmates_mid_res/stefan_zilober.jpg" frameSize="65px" frameStyle="frame2" gridColStart={1} gridColEnd={20} gridRowStart={140} gridRowEnd={157}/>  
          <NameTag name={'Stefan'} fieldOfStudy={'Pfeffifee Bachelor'} semesterNmbr={9} fontSizeTop={"150%"} fontSizeBottom={"60%"} gridColStart={5} gridColEnd={15} gridRowStart={154} gridRowEnd={158}/>

          <ImageFrame src="/crew/crewmates_mid_res/ville.jpg" frameSize="10px" frameStyle="frame2" gridColStart={58} gridColEnd={66} gridRowStart={62} gridRowEnd={70}/>
          <NameTag name={'Ville'} fieldOfStudy={'Bolizei 🚓'} semesterNmbr={0} fontSizeTop={"160%"} fontSizeBottom={"0%"} gridColStart={62} gridColEnd={69} gridRowStart={66} gridRowEnd={70}/>
          
          <ImageFrame src="/crew/crewmates_mid_res/pirate.jpg" frameSize="10px" frameStyle="frame2" gridColStart={75} gridColEnd={85} gridRowStart={33} gridRowEnd={42}/> 
          <NameTag name={'Yannik'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={74} gridColEnd={80} gridRowStart={38} gridRowEnd={42}/>

          <ImageFrame src="/crew/crewmates_mid_res/anja.jpg" frameSize="10px" frameStyle="frame2" gridColStart={75} gridColEnd={85} gridRowStart={130} gridRowEnd={138}/> 
          <NameTag name={'Anja'} fieldOfStudy={'Informatik Master'} semesterNmbr={7} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={74} gridColEnd={80} gridRowStart={135} gridRowEnd={139}/>

          <ImageFrame src="/crew/crewmates_mid_res/pirate.jpg" frameSize="10px" frameStyle="frame2" gridColStart={75} gridColEnd={85} gridRowStart={130} gridRowEnd={138}/> 
          <NameTag name={'David'} fieldOfStudy={'Informatik Master'} semesterNmbr={6} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={74} gridColEnd={80} gridRowStart={135} gridRowEnd={139}/>

          <ImageFrame src="/crew/crewmates_mid_res/pirate.jpg" frameSize="10px" frameStyle="frame2" gridColStart={75} gridColEnd={85} gridRowStart={130} gridRowEnd={138}/> 
          <NameTag name={'Jan'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={74} gridColEnd={80} gridRowStart={135} gridRowEnd={139}/>

          <ImageFrame src="/crew/crewmates_mid_res/manuel.jpg" frameSize="20px" frameStyle="frame2" gridColStart={75} gridColEnd={85} gridRowStart={126} gridRowEnd={138}/> 
          <NameTag name={'Manuel'} fieldOfStudy={'Informatik Master'} semesterNmbr={3} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={74} gridColEnd={80} gridRowStart={135} gridRowEnd={139}/>

          <ImageFrame src="/crew/crewmates_mid_res/marco.jpg" frameSize="25px" frameStyle="frame2" gridColStart={36} gridColEnd={50} gridRowStart={93} gridRowEnd={108}/> 
          <NameTag name={'Marco'} fieldOfStudy={'Informatik Master'} semesterNmbr={4} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={36} gridColEnd={43} gridRowStart={96} gridRowEnd={100}/>

          <ImageFrame src="/crew/crewmates_mid_res/maurice.jpg" frameSize="20px" frameStyle="frame3" gridColStart={74} gridColEnd={84} gridRowStart={3} gridRowEnd={19}/> 
          <NameTag name={'Leonie'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={9} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={79} gridColEnd={85} gridRowStart={16} gridRowEnd={19}/>

          <ImageFrame src="/crew/crewmates_mid_res/tom.jpg" frameSize="60px" frameStyle="frame3" gridColStart={49} gridColEnd={68} gridRowStart={40} gridRowEnd={62}/> 
          <NameTag name={'Tom'} fieldOfStudy={'Mathematik PhD'} semesterNmbr={1} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={60} gridColEnd={68} gridRowStart={57} gridRowEnd={62}/>

          <ImageFrame src="/crew/crewmates_mid_res/eileen.jpg" frameSize="46px" frameStyle="frame4" gridColStart={1} gridColEnd={16} gridRowStart={158} gridRowEnd={172}/>
          <NameTag name={'Eileen'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={5} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={5} gridColEnd={15} gridRowStart={168} gridRowEnd={175}/>

          <ImageFrame src="/crew/crewmates_mid_res/finn.jpg" frameSize="46px" frameStyle="frame4" gridColStart={16} gridColEnd={29} gridRowStart={158} gridRowEnd={172}/>
          <NameTag name={'Finn'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={5} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={17} gridColEnd={27} gridRowStart={168} gridRowEnd={175}/>

          <ImageFrame src="/crew/crewmates_mid_res/pradi.jpg" frameSize="46px" frameStyle="frame2" gridColStart={40} gridColEnd={55} gridRowStart={163} gridRowEnd={177}/>
          <NameTag name={'Pradi'} fieldOfStudy={'Informatik Master'} semesterNmbr={3} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={45} gridColEnd={53} gridRowStart={175} gridRowEnd={179}/>
          
          <ImageFrame src="/crew/crewmates_mid_res/luis.jpg" frameSize="46px" frameStyle="frame1" gridColStart={55} gridColEnd={70} gridRowStart={162} gridRowEnd={176}/>
          <NameTag name={'Luis'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={57} gridColEnd={68} gridRowStart={171} gridRowEnd={177}/>

          <ImageFrame src="/crew/crewmates_mid_res/yanniko.jpg" frameSize="46px" frameStyle="frame5" gridColStart={29} gridColEnd={40} gridRowStart={164} gridRowEnd={176}/>
          <NameTag name={'Yanniko'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={30} gridColEnd={40} gridRowStart={173} gridRowEnd={178}/>
          
          <ImageFrame src="/crew/crewmates_mid_res/joni.jpg" frameSize="46px" frameStyle="frame5" gridColStart={71} gridColEnd={83} gridRowStart={159} gridRowEnd={172}/>
          <NameTag name={'Joni'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={72} gridColEnd={80} gridRowStart={168} gridRowEnd={174}/>
          
        </div>
      </div>
    </Layout>
  )
}

export default Home
