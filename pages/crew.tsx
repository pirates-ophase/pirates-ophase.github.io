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
          Käpt&apos;n, Matrosen und Tiere an Bord
        </p>
      </section>
      
      <div className={stylesCrew.frameGrid}>
        <ImageFrame src="/crew/crewmates/lena.jpg" frameSize="90px" frameStyle="frame2" gridColStart={40} gridColEnd={74} gridRowStart={1} gridRowEnd={40}/>
        <NameTag name={'Käpt\'n Lena'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"300%"} fontSizeBottom={"100%"} gridColStart={42} gridColEnd={60} gridRowStart={32} gridRowEnd={40}/>

        <ImageFrame src="/crew/crewmates/zoe.jpg" frameSize="30px" frameStyle="frame3" gridColStart={23} gridColEnd={35} gridRowStart={46} gridRowEnd={56}/>
        <NameTag name={'1.Maatin Zoe'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"99%"} fontSizeBottom={"58%"} gridColStart={23} gridColEnd={32} gridRowStart={53} gridRowEnd={56}/>

        <ImageFrame src="/crew/crewmates/tobi.jpg" frameSize="35px" frameStyle="frame5" gridColStart={24} gridColEnd={36} gridRowStart={99} gridRowEnd={108}/>
        <NameTag name={'Papagei Tobi'} fieldOfStudy={'Informatik Master'} semesterNmbr={1} fontSizeTop={"99%"} fontSizeBottom={"50%"} gridColStart={24} gridColEnd={33} gridRowStart={105} gridRowEnd={108}/>

        <ImageFrame src="/crew/crewmates/sarah.jpg" frameSize="40px" frameStyle="frame5" gridColStart={35} gridColEnd={49} gridRowStart={45} gridRowEnd={60}/>
        <NameTag name={'Schatzmeisterin Sarah'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"99%"} fontSizeBottom={"60%"} gridColStart={38} gridColEnd={49} gridRowStart={55} gridRowEnd={60}/>
        


        <ImageFrame src="/crew/crewmates/abdel.jpg" frameSize="39px" frameStyle="frame2" gridColStart={53} gridColEnd={62} gridRowStart={101} gridRowEnd={110}/>
        <NameTag name={'Abdel'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={9} fontSizeTop={"99%"} fontSizeBottom={"60%"} gridColStart={58} gridColEnd={63} gridRowStart={106} gridRowEnd={110}/>
        <NameTag name={'Taubsi'} fieldOfStudy={''} semesterNmbr={0} fontSizeTop={"50%"} fontSizeBottom={"0%"} gridColStart={59} gridColEnd={63} gridRowStart={102} gridRowEnd={104}/>

        <ImageFrame src="/crew/crewmates/axel.jpg" frameSize="15px" frameStyle="frame3" gridColStart={16} gridColEnd={22} gridRowStart={117} gridRowEnd={123}/>
        <NameTag name={'Axel'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"99%"} fontSizeBottom={"50%"} gridColStart={16} gridColEnd={22} gridRowStart={122} gridRowEnd={125}/>

        <ImageFrame src="/crew/crewmates/benjamin.jpg" frameSize="30px" frameStyle="frame7" gridColStart={39} gridColEnd={54} gridRowStart={74} gridRowEnd={89}/>
        <NameTag name={'Benni'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"110%"} fontSizeBottom={"60%"} gridColStart={42} gridColEnd={54} gridRowStart={85} gridRowEnd={89}/>

        <ImageFrame src="/crew/crewmates/cedrico.jpg" frameSize="70px" frameStyle="frame3" gridColStart={58} gridColEnd={80} gridRowStart={70} gridRowEnd={90}/>
        <NameTag name={'Cedrico'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={9} fontSizeTop={"150%"} fontSizeBottom={"60%"} gridColStart={58} gridColEnd={70} gridRowStart={85} gridRowEnd={90}/>

        <ImageFrame src="/crew/crewmates/chloe.jpg" frameSize="40px" frameStyle="frame4" gridColStart={20} gridColEnd={30} gridRowStart={152} gridRowEnd={162}/>
        <NameTag name={'Chloe'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"120%"} fontSizeBottom={"55%"} gridColStart={24} gridColEnd={31} gridRowStart={159} gridRowEnd={163}/>

        <ImageFrame src="/crew/crewmates/christian.jpg" frameSize="40px" frameStyle="frame3" gridColStart={27} gridColEnd={40} gridRowStart={34} gridRowEnd={45}/>
        <NameTag name={'Christian'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={5} fontSizeTop={"120%"} fontSizeBottom={"55%"} gridColStart={31} gridColEnd={40} gridRowStart={34} gridRowEnd={38}/>

        <ImageFrame src="/crew/crewmates/daniel.jpg" frameSize="25px" frameStyle="frame6" gridColStart={50} gridColEnd={63} gridRowStart={90} gridRowEnd={101}/>
        <NameTag name={'Dani'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={17} fontSizeTop={"160%"} fontSizeBottom={"55%"} gridColStart={57} gridColEnd={63} gridRowStart={96} gridRowEnd={101}/>

        <ImageFrame src="/crew/crewmates/dimi.jpg" frameSize="60px" frameStyle="frame5" gridColStart={64} gridColEnd={79} gridRowStart={93} gridRowEnd={108}/>
        <NameTag name={'Dimi'} fieldOfStudy={'Mathematik Bachelor'} semesterNmbr={11} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={64} gridColEnd={74} gridRowStart={103} gridRowEnd={108}/>

        <ImageFrame src="/crew/crewmates/ebru.jpg" frameSize="60px" frameStyle="frame5" gridColStart={74} gridColEnd={85} gridRowStart={20} gridRowEnd={32}/>
        <NameTag name={'Ebru'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={5} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={74} gridColEnd={81} gridRowStart={28} gridRowEnd={32}/>

        <ImageFrame src="/crew/crewmates/edwin.jpg" frameSize="35px" frameStyle="frame4" gridColStart={26} gridColEnd={34} gridRowStart={90} gridRowEnd={97}/>
        <NameTag name={'Edwin'} fieldOfStudy={'Informatik Master'} semesterNmbr={4} fontSizeTop={"110%"} fontSizeBottom={"50%"} gridColStart={30} gridColEnd={36} gridRowStart={94} gridRowEnd={98}/>

        <ImageFrame src="/crew/crewmates/gersti.jpg" frameSize="19px" frameStyle="frame2" gridColStart={2} gridColEnd={15} gridRowStart={2} gridRowEnd={15}/>
        <NameTag name={'Gersti'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={2} gridColEnd={9} gridRowStart={10} gridRowEnd={15}/>

        <ImageFrame src="/crew/crewmates/jannes.jpg" frameSize="35px" frameStyle="frame1" gridColStart={26} gridColEnd={39} gridRowStart={20} gridRowEnd={34}/>
        <NameTag name={'Jannes'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={26} gridColEnd={33} gridRowStart={30} gridRowEnd={34}/>

        <ImageFrame src="/crew/crewmates/jasmin.jpg" frameSize="25px" frameStyle="frame1" gridColStart={36} gridColEnd={50} gridRowStart={93} gridRowEnd={109}/>
        <NameTag name={'Jasmin'} fieldOfStudy={'Wirtschafts-Informatik Bachelor'} semesterNmbr={2} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={43} gridColEnd={50} gridRowStart={103} gridRowEnd={109}/>

        <ImageFrame src="/crew/crewmates/jonas.jpg" frameSize="30px" frameStyle="frame5" gridColStart={1} gridColEnd={10} gridRowStart={43} gridRowEnd={52}/>
        <NameTag name={'Jonas'} fieldOfStudy={'Informatik Master'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={1} gridColEnd={10} gridRowStart={43} gridRowEnd={46}/>

        <ImageFrame src="/crew/crewmates/joschka_max.jpg" frameSize="180px" frameStyle="frame6" gridColStart={22} gridColEnd={75} gridRowStart={110} gridRowEnd={142}/>
        <NameTag name={'Max'} fieldOfStudy={'Informatik Master'} semesterNmbr={1} fontSizeTop={"200%"} fontSizeBottom={"100%"} gridColStart={32} gridColEnd={48} gridRowStart={135} gridRowEnd={141}/>
        <NameTag name={'Joschka'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={11} fontSizeTop={"200%"} fontSizeBottom={"100%"} gridColStart={52} gridColEnd={70} gridRowStart={135} gridRowEnd={141}/>

        <ImageFrame src="/crew/crewmates/julian.jpg" frameSize="50px" frameStyle="frame2" gridColStart={5} gridColEnd={23} gridRowStart={88} gridRowEnd={110}/>
        <NameTag name={'Julian'} fieldOfStudy={'Informatik Master'} semesterNmbr={4} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={5} gridColEnd={17} gridRowStart={90} gridRowEnd={95}/>

        <ImageFrame src="/crew/crewmates/lisa.jpg" frameSize="15px" frameStyle="frame4" gridColStart={48} gridColEnd={55} gridRowStart={66} gridRowEnd={74}/>
        <NameTag name={'Lisa'} fieldOfStudy={'Informatik Master'} semesterNmbr={2} fontSizeTop={"150%"} fontSizeBottom={"55%"} gridColStart={51} gridColEnd={58} gridRowStart={70} gridRowEnd={74}/>

        <ImageFrame src="/crew/crewmates/luc.jpg" frameSize="20px" frameStyle="frame3" gridColStart={75} gridColEnd={85} gridRowStart={110} gridRowEnd={125}/>
        <NameTag name={'LUC'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"50%"} gridColStart={75} gridColEnd={81} gridRowStart={120} gridRowEnd={125}/>

        <ImageFrame src="/crew/crewmates/lukas.jpg" frameSize="15px" frameStyle="frame2" gridColStart={76} gridColEnd={85} gridRowStart={50} gridRowEnd={58}/>
        <NameTag name={'Lukas'} fieldOfStudy={'Informatik Master'} semesterNmbr={3} fontSizeTop={"150%"} fontSizeBottom={"50%"} gridColStart={77} gridColEnd={85} gridRowStart={56} gridRowEnd={60}/>

        <ImageFrame src="/crew/crewmates/maria.jpg" frameSize="42px" frameStyle="frame7" gridColStart={3} gridColEnd={16} gridRowStart={112} gridRowEnd={125}/>
        <NameTag name={'Maria'} fieldOfStudy={'Informatik Master'} semesterNmbr={4} fontSizeTop={"150%"} fontSizeBottom={"50%"} gridColStart={4} gridColEnd={13} gridRowStart={121} gridRowEnd={125}/>

        <ImageFrame src="/crew/crewmates/mattis.jpg" frameSize="70px" frameStyle="frame6" gridColStart={64} gridColEnd={78} gridRowStart={143} gridRowEnd={156}/>
        <NameTag name={'Mattis'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={13} fontSizeTop={"200%"} fontSizeBottom={"50%"} gridColStart={70} gridColEnd={78} gridRowStart={152} gridRowEnd={158}/>

        <ImageFrame src="/crew/crewmates/mi.jpg" frameSize="46px" frameStyle="frame4" gridColStart={45} gridColEnd={62} gridRowStart={142} gridRowEnd={162}/>
        <NameTag name={'Mi'} fieldOfStudy={'Ehem. Bio'} semesterNmbr={0} fontSizeTop={"300%"} fontSizeBottom={"0%"} gridColStart={55} gridColEnd={62} gridRowStart={155} gridRowEnd={162}/>

        <ImageFrame src="/crew/crewmates/moritz.jpg" frameSize="54px" frameStyle="frame5" gridColStart={30} gridColEnd={45} gridRowStart={143} gridRowEnd={156}/>
        <NameTag name={'Moritz'} fieldOfStudy={'Ehem. Info'} semesterNmbr={0} fontSizeTop={"250%"} fontSizeBottom={"0%"} gridColStart={35} gridColEnd={45} gridRowStart={153} gridRowEnd={158}/>

        <ImageFrame src="/crew/crewmates/nala.jpg" frameSize="50px" frameStyle="frame6" gridColStart={50} gridColEnd={75} gridRowStart={40} gridRowEnd={65}/>
        <NameTag name={'Nala'} fieldOfStudy={'Angewandte Doggologie'} semesterNmbr={3} fontSizeTop={"260%"} fontSizeBottom={"110%"} gridColStart={60} gridColEnd={77} gridRowStart={57} gridRowEnd={65}/>

        <ImageFrame src="/crew/crewmates/pablo.jpg" frameSize="55px" frameStyle="frame4" gridColStart={3} gridColEnd={25} gridRowStart={22} gridRowEnd={43}/>
        <NameTag name={'Pablo'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"220%"} fontSizeBottom={"90%"} gridColStart={1} gridColEnd={12} gridRowStart={19} gridRowEnd={28}/>

        <ImageFrame src="/crew/crewmates/pascal.jpg" frameSize="20px" frameStyle="frame2" gridColStart={15} gridColEnd={23} gridRowStart={13} gridRowEnd={21}/>
        <NameTag name={'Pascal'} fieldOfStudy={'Informatik Master'} semesterNmbr={2} fontSizeTop={"110%"} fontSizeBottom={"60%"} gridColStart={16} gridColEnd={23} gridRowStart={19} gridRowEnd={22}/>

        <ImageFrame src="/crew/crewmates/paul.jpg" frameSize="20px" frameStyle="frame6" gridColStart={23} gridColEnd={40} gridRowStart={3} gridRowEnd={20}/>
        <NameTag name={'Paul'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={5} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={30} gridColEnd={40} gridRowStart={1} gridRowEnd={8}/>

        <ImageFrame src="/crew/crewmates/philipp_max_algebra.jpg" frameSize="90px" frameStyle="frame1" gridColStart={6} gridColEnd={35} gridRowStart={61} gridRowEnd={85}/>
        <NameTag name={'Philipp'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"200%"} fontSizeBottom={"70%"} gridColStart={4} gridColEnd={12} gridRowStart={68} gridRowEnd={76}/>
        <NameTag name={'Max'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"200%"} fontSizeBottom={"70%"} gridColStart={27} gridColEnd={35} gridRowStart={69} gridRowEnd={77}/>
        <NameTag name={'Algebra'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"200%"} fontSizeBottom={"70%"} gridColStart={22} gridColEnd={30} gridRowStart={79} gridRowEnd={87}/>

        <ImageFrame src="/crew/crewmates/saad.jpg" frameSize="51px" frameStyle="frame6" gridColStart={5} gridColEnd={22} gridRowStart={125} gridRowEnd={140}/>
        <NameTag name={'Saad'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={13} fontSizeTop={"200%"} fontSizeBottom={"65%"} gridColStart={2} gridColEnd={10} gridRowStart={132} gridRowEnd={140}/>

        <ImageFrame src="/crew/crewmates/simon_gurke.jpg" frameSize="50px" frameStyle="frame2" gridColStart={10} gridColEnd={23} gridRowStart={45} gridRowEnd={58}/>
        <NameTag name={'Simon'} fieldOfStudy={'Technomathematik Bachelor'} semesterNmbr={3} fontSizeTop={"170%"} fontSizeBottom={"60%"} gridColStart={16} gridColEnd={23} gridRowStart={55} gridRowEnd={60}/>

        <ImageFrame src="/crew/crewmates/simon.jpg" frameSize="20px" frameStyle="frame2" gridColStart={35} gridColEnd={47} gridRowStart={63} gridRowEnd={74}/>
        <NameTag name={'Simon'} fieldOfStudy={'Technomathematik Bachelor'} semesterNmbr={7} fontSizeTop={"130%"} fontSizeBottom={"60%"} gridColStart={42} gridColEnd={49} gridRowStart={60} gridRowEnd={65}/>

        <ImageFrame src="/crew/crewmates/stefan_lehmann.jpg" frameSize="25px" frameStyle="frame3" gridColStart={20} gridColEnd={30} gridRowStart={142} gridRowEnd={152}/>
        <NameTag name={'Stefan'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={3} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={25} gridColEnd={33} gridRowStart={140} gridRowEnd={145}/>

        <ImageFrame src="/crew/crewmates/stefan_zilober.jpg" frameSize="65px" frameStyle="frame2" gridColStart={1} gridColEnd={20} gridRowStart={140} gridRowEnd={157}/>  
        <NameTag name={'Stefan'} fieldOfStudy={'Z10'} semesterNmbr={9} fontSizeTop={"150%"} fontSizeBottom={"60%"} gridColStart={5} gridColEnd={15} gridRowStart={154} gridRowEnd={158}/>

        <ImageFrame src="/crew/crewmates/ville.jpg" frameSize="10px" frameStyle="frame2" gridColStart={65} gridColEnd={70} gridRowStart={65} gridRowEnd={70}/>
        <NameTag name={'Ville'} fieldOfStudy={'Police Service Bachelor'} semesterNmbr={6} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={68} gridColEnd={75} gridRowStart={66} gridRowEnd={70}/>
        
        <ImageFrame src="/crew/crewmates/pirate.jpg" frameSize="10px" frameStyle="frame2" gridColStart={75} gridColEnd={85} gridRowStart={130} gridRowEnd={138}/> 
        <NameTag name={'Yannik'} fieldOfStudy={'Informatik Bachelor'} semesterNmbr={7} fontSizeTop={"130%"} fontSizeBottom={"50%"} gridColStart={74} gridColEnd={80} gridRowStart={135} gridRowEnd={139}/>

      </div>
    </Layout>
  )
}

export default Home
