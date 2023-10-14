import type { NextPage } from 'next'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import styles from '../styles/Home.module.css'
import scheduleStyles from '../styles/Schedule.module.css'
import Layout from '../components/Layout'

import start from '../public/schedule/start.png';
import monday from '../public/schedule/monday.png';
import tuesday from '../public/schedule/tuesday.png';
import wednesday from '../public/schedule/wednesday.png';
import thursday from '../public/schedule/thursday.png';
import friday from '../public/schedule/friday.png';
import saturday from '../public/schedule/saturday.png';

interface ScheduleDayProps {
  image: StaticImageData;
  description: string;
}

const ScheduleDay = ({ image, description }: ScheduleDayProps) => {
  return (
    <div className={scheduleStyles.scheduleDay}>
      <Image src={image} alt={description}/>
    </div>
  );
}

const Schedule: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Wochenplan</title>
        <meta name="description" content="An Bord Matrosen!" />
      </Head>

      <h1 className={styles.title}>
        Wochenplan
      </h1>
      
      <ScheduleDay image={start} description="O-Phase 2022 - An Bord Matrosen!"/>
      
      <ScheduleDay image={monday} description={
        "Montag - " +
        "09:00 Uhr Begrüßung im Audimax, " +
        "12:30 Uhr Kennenlernspiele und Snacks im Z10, " +
        "18:00 Uhr Abendessen im Vogelbräu, " +
        "20:00 Uhr Kneipentour mit Start am Vogelbräu"
      }/>
      
      <ScheduleDay image={tuesday} description={
        "Dienstag - " +
        "09:30 Uhr Frühstück im Z10, " +
        "14:00 Uhr Fachbereichsinformationen, " +
        "15:30 Uhr Campustour ab Audimax, " +
        "17:00 Uhr Bolognese essen im Z10, " +
        "19:00 Uhr O-Phest im AKK"
      }/>
      
      <ScheduleDay image={wednesday} description={
        "Mittwoch - " +
        "09:30 Uhr Frühstück im Z10, " +
        "11:00 Uhr - 17:00 Uhr O-Rallye im Z10 und auf dem Campus, " +
        "17:00 Uhr Knödel essen, " +
        "20:00 Uhr Cocktailabend in der K4-Bar"
      }/>
      
      <ScheduleDay image={thursday} description={
        "Donnerstag - " +
        "10:30 Uhr Katerfrühstück im Z10, " +
        "13:00 Uhr O-Lympia auf dem Campus, " +
        "17:00 Uhr Grillen und Fragestunde bei der K6-Bar"
      }/>
      
      <ScheduleDay image={friday} description={
        "Freitag - " +
        "09:30 Uhr Frühstück im Z10, " +
        "13:00 Uhr Lasertag mit Start am Z10" +
        "18:00 Uhr Z10, AKK, Rave"
      }/>

      <ScheduleDay image={saturday} description={
        "Samstag - " +
        "10:00 Uhr Mädelsbrunch im Mathebau, " +
        "20:00 Uhr O-Philm 2, "
      }/>
    </Layout>
  )
}

export default Schedule;
