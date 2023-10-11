import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import stylesCrew from '../styles/Crew.module.css'
import NextLink from 'next/link'
import Layout from '../components/Layout'
import { ImageFrame } from '../components/ImageFrame'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Logbuch</title>
        <meta name="description" content="Es war einmal..." />
      </Head>

      <h1 className={styles.title}>
        Logbuch
      </h1>

      <div style={{maxWidth: '100%', overflowY: 'auto', overflowX: 'scroll', textAlign: 'center'}}>
      <p className={styles.description}>
          O-Phase 2022
        </p>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/log/2022/1.jpg" frameSize="50px" frameStyle="frame5" gridColStart={19} gridColEnd={50} gridRowStart={22} gridRowEnd={55}/>
          <ImageFrame src="/log/2022/2.jpg" frameSize="60px" frameStyle="frame2" gridColStart={52} gridColEnd={85} gridRowStart={30} gridRowEnd={55}/>
          <ImageFrame src="/log/2022/3.jpg" frameSize="40px" frameStyle="frame4" gridColStart={51} gridColEnd={86} gridRowStart={4} gridRowEnd={29}/>
          <ImageFrame src="/log/2022/4.jpg" frameSize="70px" frameStyle="frame1" gridColStart={17} gridColEnd={50} gridRowStart={1} gridRowEnd={22}/>
          <ImageFrame src="/log/2022/5.jpg" frameSize="40px" frameStyle="frame4" gridColStart={51} gridColEnd={86} gridRowStart={58} gridRowEnd={81}/>
          <ImageFrame src="/log/2022/6.jpg" frameSize="60px" frameStyle="frame2" gridColStart={12} gridColEnd={47} gridRowStart={57} gridRowEnd={82}/>
        </div>
        
        <p className={styles.description}>
          O-Phase 2021
        </p>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/log/2021/1.jpg" frameSize="50px" frameStyle="frame5" gridColStart={12} gridColEnd={40} gridRowStart={35} gridRowEnd={60}/>
          <ImageFrame src="/log/2021/2.jpg" frameSize="30px" frameStyle="frame2" gridColStart={57} gridColEnd={90} gridRowStart={1} gridRowEnd={48}/>
          <ImageFrame src="/log/2021/3.jpg" frameSize="30px" frameStyle="frame4" gridColStart={41} gridColEnd={70} gridRowStart={50} gridRowEnd={68}/>
          <ImageFrame src="/log/2021/4.jpg" frameSize="70px" frameStyle="frame5" gridColStart={10} gridColEnd={57} gridRowStart={10} gridRowEnd={33}/>
        </div>

          
        <p className={styles.description}>
          O-Phase 2020 (Corona Special)
        </p>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/log/2020/1.jpg" frameSize="30px" frameStyle="frame5" gridColStart={20} gridColEnd={40} gridRowStart={42} gridRowEnd={60}/>
          <ImageFrame src="/log/2020/2.jpg" frameSize="110px" frameStyle="frame6" gridColStart={57} gridColEnd={90} gridRowStart={10} gridRowEnd={30}/>
          <ImageFrame src="/log/2020/3.jpg" frameSize="20px" frameStyle="frame4" gridColStart={57} gridColEnd={78} gridRowStart={32} gridRowEnd={45}/>
          <ImageFrame src="/log/2020/4.jpg" frameSize="100px" frameStyle="frame2" gridColStart={18} gridColEnd={57} gridRowStart={5} gridRowEnd={30}/>
          <ImageFrame src="/log/2020/5.jpg" frameSize="30px" frameStyle="frame2" gridColStart={65} gridColEnd={85} gridRowStart={45} gridRowEnd={58}/>
          <ImageFrame src="/log/2020/6.jpg" frameSize="30px" frameStyle="frame1" gridColStart={40} gridColEnd={55} gridRowStart={30} gridRowEnd={45}/>
          <ImageFrame src="/log/2020/7.jpg" frameSize="30px" frameStyle="frame3" gridColStart={15} gridColEnd={30} gridRowStart={30} gridRowEnd={40}/>
          <ImageFrame src="/log/2020/8.jpg" frameSize="45px" frameStyle="frame5" gridColStart={40} gridColEnd={65} gridRowStart={48} gridRowEnd={62}/>
        </div>


        <p className={styles.description}>
          O-Phase 2019
        </p>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/log/2019/1.jpg" frameSize="30px" frameStyle="frame2" gridColStart={16} gridColEnd={55} gridRowStart={10} gridRowEnd={30}/>
          <ImageFrame src="/log/2019/2.jpg" frameSize="90px" frameStyle="frame4" gridColStart={57} gridColEnd={90} gridRowStart={15} gridRowEnd={38}/>
          <ImageFrame src="/log/2019/3.jpg" frameSize="70px" frameStyle="frame3" gridColStart={10} gridColEnd={40} gridRowStart={30} gridRowEnd={50}/>
          <ImageFrame src="/log/2019/4.jpg" frameSize="50px" frameStyle="frame6" gridColStart={55} gridColEnd={75} gridRowStart={1} gridRowEnd={15}/>
          <ImageFrame src="/log/2019/5.jpg" frameSize="65px" frameStyle="frame1" gridColStart={75} gridColEnd={95} gridRowStart={1} gridRowEnd={15}/>
          <ImageFrame src="/log/2019/6.jpg" frameSize="120px" frameStyle="frame5" gridColStart={11} gridColEnd={90} gridRowStart={95} gridRowEnd={130}/>
          <ImageFrame src="/log/2019/7.jpg" frameSize="90px" frameStyle="frame2" gridColStart={15} gridColEnd={45} gridRowStart={56} gridRowEnd={87}/>
          <ImageFrame src="/log/2019/8.jpg" frameSize="150px" frameStyle="frame6" gridColStart={45} gridColEnd={95} gridRowStart={42} gridRowEnd={95}/>
        </div>

          
        <p className={styles.description}>
          O-Phase 2018
        </p>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/log/2018/1.jpg" frameSize="130px" frameStyle="frame5" gridColStart={15} gridColEnd={57} gridRowStart={15} gridRowEnd={45}/>
          <ImageFrame src="/log/2018/2.jpg" frameSize="90px" frameStyle="frame4" gridColStart={57} gridColEnd={95} gridRowStart={1} gridRowEnd={28}/>
        </div>


        <p className={styles.description}>
          O-Phase 2017
        </p>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/log/2017/1.jpg" frameSize="130px" frameStyle="frame3" gridColStart={51} gridColEnd={90} gridRowStart={15} gridRowEnd={50}/>
          <ImageFrame src="/log/2017/2.jpg" frameSize="90px" frameStyle="frame2" gridColStart={17} gridColEnd={50} gridRowStart={1} gridRowEnd={30}/>
          <ImageFrame src="/log/2017/3.jpg" frameSize="90px" frameStyle="frame6" gridColStart={17} gridColEnd={50} gridRowStart={36} gridRowEnd={60}/>
        </div>

          
        <p className={styles.description}>
          O-Phase 2016
        </p>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/log/2016/1.jpg" frameSize="250px" frameStyle="frame5" gridColStart={15} gridColEnd={85} gridRowStart={1} gridRowEnd={50}/>
        </div>


        <p className={styles.description}>
          O-Phase 2015
        </p>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/log/2015/1.jpg" frameSize="270px" frameStyle="frame6" gridColStart={15} gridColEnd={85} gridRowStart={1} gridRowEnd={50}/>
        </div>

          
        <p className={styles.description}>
          O-Phase 2014
        </p>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/log/2014/1.jpg" frameSize="90px" frameStyle="frame2" gridColStart={12} gridColEnd={57} gridRowStart={1} gridRowEnd={30}/>
          <ImageFrame src="/log/2014/2.jpg" frameSize="90px" frameStyle="frame1" gridColStart={57} gridColEnd={96} gridRowStart={15} gridRowEnd={40}/>
          <ImageFrame src="/log/2014/3.jpg" frameSize="100px" frameStyle="frame3" gridColStart={10} gridColEnd={55} gridRowStart={30} gridRowEnd={60}/>
          <ImageFrame src="/log/2014/4.jpg" frameSize="50px" frameStyle="frame6" gridColStart={57} gridColEnd={77} gridRowStart={1} gridRowEnd={15}/>
          <ImageFrame src="/log/2014/5.jpg" frameSize="35px" frameStyle="frame4" gridColStart={78} gridColEnd={95} gridRowStart={3} gridRowEnd={15}/>
        </div>


        <p className={styles.description}>
          O-Phase 2013
        </p>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/log/2013/1.jpg" frameSize="95px" frameStyle="frame6" gridColStart={22} gridColEnd={90} gridRowStart={1} gridRowEnd={35}/>
          <ImageFrame src="/log/2013/2.jpg" frameSize="90px" frameStyle="frame2" gridColStart={15} gridColEnd={45} gridRowStart={37} gridRowEnd={57}/>
          <ImageFrame src="/log/2013/3.jpg" frameSize="150px" frameStyle="frame5" gridColStart={45} gridColEnd={90} gridRowStart={35} gridRowEnd={65}/>
        </div>

          
        <p className={styles.description}>
          O-Phase 2012 (Schiffbau)
        </p>
        <div className={stylesCrew.frameGrid}>
          <ImageFrame src="/log/2012/1.jpg" frameSize="50px" frameStyle="frame6" gridColStart={65} gridColEnd={90} gridRowStart={27} gridRowEnd={45}/>
          <ImageFrame src="/log/2012/2.jpg" frameSize="65px" frameStyle="frame1" gridColStart={62} gridColEnd={85} gridRowStart={1} gridRowEnd={23}/>
          <ImageFrame src="/log/2012/3.jpg" frameSize="150px" frameStyle="frame5" gridColStart={20} gridColEnd={60} gridRowStart={1} gridRowEnd={40}/>
        </div>
      </div>
      
    </Layout>
  )
}

export default Home
