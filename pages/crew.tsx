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
          <ImageFrame src="/crew/crewmates_mid_res/pablo2.jpg" frameSize="46px" frameStyle="frame5" gridColStart={23} gridColEnd={38} gridRowStart={1} gridRowEnd={17}/>
          <NameTag name={'Chefkoch Pablo'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={9} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={24} gridColEnd={32} gridRowStart={13} gridRowEnd={19}/>

          <ImageFrame src="/crew/crewmates_mid_res/zoe.jpg" frameSize="30px" frameStyle="frame3" gridColStart={23} gridColEnd={35} gridRowStart={76} gridRowEnd={88}/>
          <NameTag name={'Zoë'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={13} fontSizeTop={"170%"} fontSizeBottom={"58%"} gridColStart={23} gridColEnd={32} gridRowStart={85} gridRowEnd={90}/>

          <ImageFrame src="/crew/crewmates_mid_res/tobi.jpg" frameSize="35px" frameStyle="frame5" gridColStart={24} gridColEnd={36} gridRowStart={129} gridRowEnd={138}/>
          <NameTag name={'Tobi'} fieldOfStudy={'Informatik Master'} semesterNmbr={7} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={24} gridColEnd={33} gridRowStart={135} gridRowEnd={140}/>

          <ImageFrame src="/crew/crewmates_mid_res/sarah.jpg" frameSize="10px" frameStyle="frame2" gridColStart={55} gridColEnd={71} gridRowStart={37} gridRowEnd={53}/>
          <NameTag name={'Sarah'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={13} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={54} gridColEnd={60} gridRowStart={45} gridRowEnd={49}/>
          
          <ImageFrame src="/crew/crewmates_mid_res/alex_sommer.jpg" frameSize="15px" frameStyle="frame3" gridColStart={16} gridColEnd={22} gridRowStart={147} gridRowEnd={153}/>
          <NameTag name={'Alex'} fieldOfStudy={'Informatik Master'} semesterNmbr={6} fontSizeTop={"99%"} fontSizeBottom={"50%"} gridColStart={16} gridColEnd={22} gridRowStart={152} gridRowEnd={155}/>

          <ImageFrame src="/crew/crewmates_mid_res/benjamin.jpg" frameSize="30px" frameStyle="frame7" gridColStart={39} gridColEnd={54} gridRowStart={104} gridRowEnd={119}/>
          <NameTag name={'Benni'} fieldOfStudy={'Informatik Master'} semesterNmbr={4} fontSizeTop={"110%"} fontSizeBottom={"60%"} gridColStart={42} gridColEnd={54} gridRowStart={115} gridRowEnd={119}/>

          <ImageFrame src="/crew/crewmates_mid_res/cedrico.jpg" frameSize="70px" frameStyle="frame3" gridColStart={58} gridColEnd={80} gridRowStart={100} gridRowEnd={120}/>
          <NameTag name={'Cedrico'} fieldOfStudy={'Informatik Master'} semesterNmbr={6} fontSizeTop={"150%"} fontSizeBottom={"60%"} gridColStart={58} gridColEnd={70} gridRowStart={115} gridRowEnd={120}/>

          <ImageFrame src="/crew/crewmates_mid_res/christian.jpg" frameSize="40px" frameStyle="frame3" gridColStart={3} gridColEnd={23} gridRowStart={3} gridRowEnd={22}/>
          <NameTag name={'Schatzmeister Christian'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"120%"} fontSizeBottom={"55%"} gridColStart={3} gridColEnd={12} gridRowStart={3} gridRowEnd={8}/>

          <ImageFrame src="/crew/crewmates_mid_res/daniel.jpg" frameSize="25px" frameStyle="frame6" gridColStart={50} gridColEnd={63} gridRowStart={120} gridRowEnd={134}/>
          <NameTag name={'Dani'} fieldOfStudy={'Bürgergeld'} semesterNmbr={3} fontSizeTop={"160%"} fontSizeBottom={"55%"} gridColStart={57} gridColEnd={64} gridRowStart={126} gridRowEnd={131}/>

          <ImageFrame src="/crew/crewmates_mid_res/dimi.jpg" frameSize="60px" frameStyle="frame5" gridColStart={64} gridColEnd={79} gridRowStart={123} gridRowEnd={138}/>
          <NameTag name={'Dimi'} fieldOfStudy={'Mathematik Master'} semesterNmbr={6} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={64} gridColEnd={74} gridRowStart={133} gridRowEnd={138}/>

          <ImageFrame src="/crew/crewmates_mid_res/edwin.jpg" frameSize="60px" frameStyle="frame5" gridColStart={72} gridColEnd={83} gridRowStart={52} gridRowEnd={62}/>
          <NameTag name={'Edwin'} fieldOfStudy={'Ehem. Info'} semesterNmbr={0} fontSizeTop={"150%"} fontSizeBottom={"0%"} gridColStart={74} gridColEnd={81} gridRowStart={58} gridRowEnd={62}/>

          <ImageFrame src="/crew/crewmates_mid_res/jannes.jpg" frameSize="35px" frameStyle="frame1" gridColStart={26} gridColEnd={39} gridRowStart={50} gridRowEnd={74}/>
          <NameTag name={'Jannes'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={"(7+4i)"} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={26} gridColEnd={33} gridRowStart={60} gridRowEnd={64}/>

          <ImageFrame src="/crew/crewmates_mid_res/jonas.jpg" frameSize="30px" frameStyle="frame5" gridColStart={1} gridColEnd={10} gridRowStart={73} gridRowEnd={82}/>
          <NameTag name={'Jonas'} fieldOfStudy={'Informatik Master'} semesterNmbr={9} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={1} gridColEnd={10} gridRowStart={73} gridRowEnd={76}/>

          <ImageFrame src="/crew/crewmates_mid_res/joschka_max.jpg" frameSize="90px" frameStyle="frame6" gridColStart={22} gridColEnd={75} gridRowStart={140} gridRowEnd={172}/>
          <NameTag name={'Max'} fieldOfStudy={'Informatik Master'} semesterNmbr={6} fontSizeTop={"200%"} fontSizeBottom={"100%"} gridColStart={32} gridColEnd={48} gridRowStart={167} gridRowEnd={173}/>
          <NameTag name={'Joschka'} fieldOfStudy={'Informatik Master'} semesterNmbr={5} fontSizeTop={"200%"} fontSizeBottom={"100%"} gridColStart={52} gridColEnd={70} gridRowStart={167} gridRowEnd={173}/>

          <ImageFrame src="/crew/crewmates_mid_res/julian.jpg" frameSize="50px" frameStyle="frame2" gridColStart={5} gridColEnd={23} gridRowStart={118} gridRowEnd={140}/>
          <NameTag name={'Julian'} fieldOfStudy={'Mathematik PhD'} semesterNmbr={5} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={5} gridColEnd={17} gridRowStart={120} gridRowEnd={125}/>

          <ImageFrame src="/crew/crewmates_mid_res/kevin.jpg" frameSize="20px" frameStyle="frame4" gridColStart={69} gridColEnd={79} gridRowStart={88} gridRowEnd={96}/>
          <NameTag name={'Kevin'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={9} fontSizeTop={"120%"} fontSizeBottom={"55%"} gridColStart={73} gridColEnd={82} gridRowStart={94} gridRowEnd={98}/>

          <ImageFrame src="/crew/crewmates_mid_res/lena.jpg" frameSize="55px" frameStyle="frame4" gridColStart={3} gridColEnd={25} gridRowStart={22} gridRowEnd={43}/>
          <NameTag name={'Lena'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={13} fontSizeTop={"220%"} fontSizeBottom={"90%"} gridColStart={1} gridColEnd={12} gridRowStart={22} gridRowEnd={28}/>

          <ImageFrame src="/crew/crewmates_mid_res/lisa.jpg" frameSize="15px" frameStyle="frame4" gridColStart={48} gridColEnd={58} gridRowStart={93} gridRowEnd={104}/>
          <NameTag name={'Lisa'} fieldOfStudy={'Informatik Master'} semesterNmbr={5} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={51} gridColEnd={58} gridRowStart={100} gridRowEnd={104}/>

          <ImageFrame src="/crew/crewmates_mid_res/luc.jpg" frameSize="20px" frameStyle="frame3" gridColStart={75} gridColEnd={85} gridRowStart={140} gridRowEnd={155}/>
          <NameTag name={'LUC'} fieldOfStudy={'Wissenschaft-Medien-Kommunikation Bachelor'} semesterNmbr={5} fontSizeTop={"150%"} fontSizeBottom={"50%"} gridColStart={75} gridColEnd={81} gridRowStart={150} gridRowEnd={155}/>

          <ImageFrame src="/crew/crewmates_mid_res/pirate.jpg" frameSize="25px" frameStyle="frame2" gridColStart={68} gridColEnd={85} gridRowStart={72} gridRowEnd={88}/>
          <NameTag name={'Lea'} fieldOfStudy={'Informatik Master'} semesterNmbr={9} fontSizeTop={"150%"} fontSizeBottom={"50%"} gridColStart={77} gridColEnd={85} gridRowStart={82} gridRowEnd={86}/>

          <ImageFrame src="/crew/crewmates_mid_res/mi.jpg" frameSize="42px" frameStyle="frame7" gridColStart={3} gridColEnd={16} gridRowStart={142} gridRowEnd={155}/>
          <NameTag name={'Mi'} fieldOfStudy={'Ehem. Bio'} semesterNmbr={0} fontSizeTop={"200%"} fontSizeBottom={"0%"} gridColStart={4} gridColEnd={13} gridRowStart={151} gridRowEnd={155}/>

          <ImageFrame src="/crew/crewmates_mid_res/mattis.jpg" frameSize="70px" frameStyle="frame6" gridColStart={64} gridColEnd={78} gridRowStart={173} gridRowEnd={186}/>
          <NameTag name={'Mattis'} fieldOfStudy={'Informatik Master'} semesterNmbr={6} fontSizeTop={"200%"} fontSizeBottom={"50%"} gridColStart={70} gridColEnd={83} gridRowStart={182} gridRowEnd={188}/>

          <ImageFrame src="/crew/crewmates_mid_res/moritz.jpg" frameSize="54px" frameStyle="frame5" gridColStart={30} gridColEnd={57} gridRowStart={173} gridRowEnd={190}/>
          <NameTag name={'Moritz'} fieldOfStudy={'Ehem. Info'} semesterNmbr={0} fontSizeTop={"250%"} fontSizeBottom={"0%"} gridColStart={35} gridColEnd={45} gridRowStart={188} gridRowEnd={193}/>

          <ImageFrame src="/crew/crewmates_mid_res/pascal_rockenstiehl.jpg" frameSize="20px" frameStyle="frame2" gridColStart={51} gridColEnd={58} gridRowStart={134} gridRowEnd={140}/>
          <NameTag name={'Pascal'} fieldOfStudy={'Informatik Master'} semesterNmbr={3} fontSizeTop={"110%"} fontSizeBottom={"60%"} gridColStart={54} gridColEnd={61} gridRowStart={136} gridRowEnd={140}/>

          <ImageFrame src="/crew/crewmates_mid_res/paul.jpg" frameSize="20px" frameStyle="frame6" gridColStart={23} gridColEnd={40} gridRowStart={36} gridRowEnd={47}/>
          <NameTag name={'Paul'} fieldOfStudy={'Informatik Master'} semesterNmbr={3} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={30} gridColEnd={40} gridRowStart={32} gridRowEnd={40}/>

          <ImageFrame src="/crew/crewmates_mid_res/philipp_max_algebra.jpg" frameSize="90px" frameStyle="frame1" gridColStart={6} gridColEnd={35} gridRowStart={91} gridRowEnd={115}/>
          <NameTag name={'Philipp'} fieldOfStudy={'Exil-Robotik'} semesterNmbr={1} fontSizeTop={"200%"} fontSizeBottom={"70%"} gridColStart={4} gridColEnd={12} gridRowStart={98} gridRowEnd={106}/>
          <NameTag name={'Max'} fieldOfStudy={'Informatik Master'} semesterNmbr={3} fontSizeTop={"200%"} fontSizeBottom={"70%"} gridColStart={27} gridColEnd={35} gridRowStart={99} gridRowEnd={107}/>
          <NameTag name={'Algebra'} fieldOfStudy={'Informatik Master (hoffentlich)'} semesterNmbr={1} fontSizeTop={"200%"} fontSizeBottom={"70%"} gridColStart={22} gridColEnd={30} gridRowStart={109} gridRowEnd={117}/>

          <ImageFrame src="/crew/crewmates_mid_res/simon_gurke.jpg" frameSize="50px" frameStyle="frame2" gridColStart={10} gridColEnd={23} gridRowStart={75} gridRowEnd={88}/>
          <NameTag name={'Simon'} fieldOfStudy={'Mathematik Bachelor'} semesterNmbr={4} fontSizeTop={"170%"} fontSizeBottom={"60%"} gridColStart={16} gridColEnd={23} gridRowStart={85} gridRowEnd={90}/>

          <ImageFrame src="/crew/crewmates_mid_res/simon.jpg" frameSize="20px" frameStyle="frame2" gridColStart={35} gridColEnd={47} gridRowStart={93} gridRowEnd={104}/>
          <NameTag name={'Simon'} fieldOfStudy={'Technomathematik Master'} semesterNmbr={5} fontSizeTop={"130%"} fontSizeBottom={"60%"} gridColStart={42} gridColEnd={49} gridRowStart={90} gridRowEnd={95}/>

          <ImageFrame src="/crew/crewmates_mid_res/stefan_lehmann.jpg" frameSize="25px" frameStyle="frame3" gridColStart={20} gridColEnd={30} gridRowStart={172} gridRowEnd={182}/>
          <NameTag name={'Stefan'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={9} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={25} gridColEnd={33} gridRowStart={170} gridRowEnd={175}/>

          <ImageFrame src="/crew/crewmates_mid_res/stefan_zilober.jpg" frameSize="65px" frameStyle="frame2" gridColStart={1} gridColEnd={20} gridRowStart={170} gridRowEnd={187}/>  
          <NameTag name={'Stefan'} fieldOfStudy={'Pfeffifee Bachelor'} semesterNmbr={11} fontSizeTop={"150%"} fontSizeBottom={"60%"} gridColStart={5} gridColEnd={15} gridRowStart={184} gridRowEnd={188}/>

          <ImageFrame src="/crew/crewmates_mid_res/ville.jpg" frameSize="10px" frameStyle="frame2" gridColStart={58} gridColEnd={66} gridRowStart={92} gridRowEnd={100}/>
          <NameTag name={'Ville'} fieldOfStudy={'Bolizei 🚓'} semesterNmbr={0} fontSizeTop={"160%"} fontSizeBottom={"0%"} gridColStart={62} gridColEnd={69} gridRowStart={96} gridRowEnd={100}/>
          
          <ImageFrame src="/crew/crewmates_mid_res/yannic.jpg" frameSize="10px" frameStyle="frame2" gridColStart={75} gridColEnd={85} gridRowStart={63} gridRowEnd={72}/> 
          <NameTag name={'Yannic'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={74} gridColEnd={80} gridRowStart={68} gridRowEnd={72}/>

          <ImageFrame src="/crew/crewmates_mid_res/anja.jpg" frameSize="10px" frameStyle="frame2" gridColStart={75} gridColEnd={85} gridRowStart={160} gridRowEnd={168}/> 
          <NameTag name={'Anja'} fieldOfStudy={'Informatik Master'} semesterNmbr={9} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={74} gridColEnd={80} gridRowStart={165} gridRowEnd={169}/>

          <ImageFrame src="/crew/crewmates_mid_res/david_bogusch.jpg" frameSize="40px" frameStyle="frame5" gridColStart={35} gridColEnd={49} gridRowStart={75} gridRowEnd={90}/> 
          <NameTag name={'David'} fieldOfStudy={'Informatik Master'} semesterNmbr={8} fontSizeTop={"170%"} fontSizeBottom={"60%"} gridColStart={38} gridColEnd={49} gridRowStart={85} gridRowEnd={90}/>

          <ImageFrame src="/crew/crewmates_mid_res/pirate.jpg" frameSize="10px" frameStyle="frame2" gridColStart={75} gridColEnd={85} gridRowStart={160} gridRowEnd={168}/> 
          <NameTag name={'Jan'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={13} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={74} gridColEnd={80} gridRowStart={165} gridRowEnd={169}/>

          <ImageFrame src="/crew/crewmates_mid_res/manuel.jpg" frameSize="20px" frameStyle="frame2" gridColStart={75} gridColEnd={85} gridRowStart={156} gridRowEnd={168}/> 
          <NameTag name={'Manuel'} fieldOfStudy={'Informatik PhD'} semesterNmbr={1} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={74} gridColEnd={80} gridRowStart={165} gridRowEnd={169}/>

          <ImageFrame src="/crew/crewmates_mid_res/marco.jpg" frameSize="25px" frameStyle="frame2" gridColStart={36} gridColEnd={50} gridRowStart={123} gridRowEnd={138}/> 
          <NameTag name={'Marco'} fieldOfStudy={'Ehem. Info'} semesterNmbr={0} fontSizeTop={"130%"} fontSizeBottom={"0%"} gridColStart={36} gridColEnd={43} gridRowStart={126} gridRowEnd={130}/>

          <ImageFrame src="/crew/crewmates_mid_res/maurice.jpg" frameSize="20px" frameStyle="frame3" gridColStart={74} gridColEnd={84} gridRowStart={33} gridRowEnd={49}/> 
          <NameTag name={'Leonie'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={79} gridColEnd={85} gridRowStart={46} gridRowEnd={49}/>

          <ImageFrame src="/crew/crewmates_mid_res/tom.jpg" frameSize="60px" frameStyle="frame3" gridColStart={49} gridColEnd={68} gridRowStart={70} gridRowEnd={92}/> 
          <NameTag name={'Tom'} fieldOfStudy={'Mathematik PhD'} semesterNmbr={3} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={60} gridColEnd={68} gridRowStart={87} gridRowEnd={92}/>

          <ImageFrame src="/crew/crewmates_mid_res/eileen.jpg" frameSize="46px" frameStyle="frame4" gridColStart={1} gridColEnd={16} gridRowStart={188} gridRowEnd={202}/>
          <NameTag name={'Eileen'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={5} gridColEnd={15} gridRowStart={198} gridRowEnd={205}/>

          <ImageFrame src="/crew/crewmates_mid_res/finn.jpg" frameSize="46px" frameStyle="frame4" gridColStart={16} gridColEnd={29} gridRowStart={188} gridRowEnd={202}/>
          <NameTag name={'Finn'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={17} gridColEnd={27} gridRowStart={198} gridRowEnd={205}/>

          <ImageFrame src="/crew/crewmates_mid_res/pradi.jpg" frameSize="46px" frameStyle="frame2" gridColStart={74} gridColEnd={88} gridRowStart={-2} gridRowEnd={15}/>
          <NameTag name={'Pradi'} fieldOfStudy={'Informatik Master'} semesterNmbr={5} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={82} gridColEnd={90} gridRowStart={10} gridRowEnd={16}/>
          
          <ImageFrame src="/crew/crewmates_mid_res/luis.jpg" frameSize="46px" frameStyle="frame1" gridColStart={27} gridColEnd={39} gridRowStart={18} gridRowEnd={31}/>
          <NameTag name={'Papagei Luis'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={27} gridColEnd={38} gridRowStart={28} gridRowEnd={34}/>

          <ImageFrame src="/crew/crewmates_mid_res/yanniko.jpg" frameSize="46px" frameStyle="frame5" gridColStart={79} gridColEnd={90} gridRowStart={170} gridRowEnd={182}/>
          <NameTag name={'Yanniko'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={5} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={80} gridColEnd={90} gridRowStart={179} gridRowEnd={185}/>
          
          <ImageFrame src="/crew/crewmates_mid_res/joni.jpg" frameSize="90px" frameStyle="frame2" gridColStart={40} gridColEnd={74} gridRowStart={1} gridRowEnd={36}/>
          <NameTag name={'Käpt\'n Joni'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"300%"} fontSizeBottom={"100%"} gridColStart={42} gridColEnd={60} gridRowStart={30} gridRowEnd={38}/>
          
          <ImageFrame src="/crew/crewmates_mid_res/alexandra.jpg" frameSize="30px" frameStyle="frame4" gridColStart={84} gridColEnd={96} gridRowStart={30} gridRowEnd={45}/>
          <NameTag name={'Alex'} fieldOfStudy={'Informatik Master'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={84} gridColEnd={92} gridRowStart={38} gridRowEnd={42}/>

          <ImageFrame src="/crew/crewmates_mid_res/thor.jpg" frameSize="60px" frameStyle="frame1" gridColStart={25} gridColEnd={45} gridRowStart={270} gridRowEnd={290}/>
          <NameTag name={'Thor'} fieldOfStudy={'Goldscheffeln'} semesterNmbr={16} fontSizeTop={"200%"} fontSizeBottom={"80%"} gridColStart={25} gridColEnd={38} gridRowStart={285} gridRowEnd={290}/>

          <ImageFrame src="/crew/crewmates_mid_res/david_hoefler.jpg" frameSize="30px" frameStyle="frame3" gridColStart={80} gridColEnd={95} gridRowStart={90} gridRowEnd={105}/>
          <NameTag name={'David'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={80} gridColEnd={90} gridRowStart={98} gridRowEnd={103}/>

          <ImageFrame src="/crew/crewmates_mid_res/johanna.jpg" frameSize="35px" frameStyle="frame2" gridColStart={74} gridColEnd={89} gridRowStart={15} gridRowEnd={30}/>
          <NameTag name={'Johanna'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={76} gridColEnd={87} gridRowStart={25} gridRowEnd={30}/>

          <ImageFrame src="/crew/crewmates_mid_res/linus.jpg" frameSize="25px" frameStyle="frame5" gridColStart={7} gridColEnd={22} gridRowStart={43} gridRowEnd={58}/>
          <NameTag name={'Linus'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"140%"} fontSizeBottom={"55%"} gridColStart={2} gridColEnd={8} gridRowStart={51} gridRowEnd={56}/>

          <ImageFrame src="/crew/crewmates_mid_res/simon_stockinger.jpg" frameSize="40px" frameStyle="frame6" gridColStart={85} gridColEnd={103} gridRowStart={45} gridRowEnd={63}/>
          <NameTag name={'Simon'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={5} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={85} gridColEnd={98} gridRowStart={58} gridRowEnd={63}/>

          <ImageFrame src="/crew/crewmates_mid_res/jonathan.jpg" frameSize="30px" frameStyle="frame7" gridColStart={39} gridColEnd={54} gridRowStart={53} gridRowEnd={68}/>
          <NameTag name={'Jonathan'} fieldOfStudy={'Mathematik Bachelor'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={39} gridColEnd={49} gridRowStart={63} gridRowEnd={68}/>

          <ImageFrame src="/crew/crewmates_mid_res/jan_mansel.jpg" frameSize="35px" frameStyle="frame4" gridColStart={54} gridColEnd={69} gridRowStart={53} gridRowEnd={68}/>
          <NameTag name={'Jan'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={56} gridColEnd={67} gridRowStart={63} gridRowEnd={68}/>

          <ImageFrame src="/crew/crewmates_mid_res/moritz_leistner.jpg" frameSize="40px" frameStyle="frame3" gridColStart={8} gridColEnd={23} gridRowStart={58} gridRowEnd={75}/>
          <NameTag name={'Moritz'} fieldOfStudy={'Informatik Master'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={2} gridColEnd={15} gridRowStart={68} gridRowEnd={73}/>

          <ImageFrame src="/crew/crewmates_mid_res/christian_schultheis.jpg" frameSize="35px" frameStyle="frame2" gridColStart={40} gridColEnd={55} gridRowStart={38} gridRowEnd={53}/>
          <NameTag name={'Christian'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={42} gridColEnd={53} gridRowStart={48} gridRowEnd={53}/>
          
        </div>
      </div>
    </Layout>
  )
}

export default Home
