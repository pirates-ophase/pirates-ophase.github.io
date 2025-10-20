import NextLink from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        Piratige Links:
        <ul>
          <li className={styles.island}><NextLink href="/">Home &rarr;</NextLink></li>
          <li className={styles.skull}><NextLink href="/crew">Crew &rarr;</NextLink></li>
          <li className={styles.flag}><NextLink href="/schedule">Wochenplan &rarr;</NextLink></li>
          <li className={styles.parrot}><NextLink href="/log">Logbuch &rarr;</NextLink></li>
          <li className={styles.parrot}><NextLink href="/imprint">Impressum &rarr;</NextLink></li>
        </ul>
      </div>

      <div>
        Sonstige Links:
        <ul>
          <li className={styles.student}><a href="https://asta-kit.de">AStA &rarr;</a></li>
          <li className={styles.books}><a href="https://kit.edu">KIT &rarr;</a></li>
          <li className={styles.council}><a href="https://fsmi.uni-karlsruhe.de">Fachschaft &rarr;</a></li>
        </ul>
      </div>
      
      <div>
        <ul>
          <li className={styles.flag}>Pirates, 2024</li>
          <li>&nbsp;</li>
          <li>An Land gezogen von Max und Philipp</li> 
        </ul>
      </div>

      <div>
        <a href="https://codewerk.de/"><Image src='/sponsoring/codewerk.png' width={150} height={75} alt="Codewerk Logo"/></a>
      </div>

      <div>
        <a href="https://argutia.org/"><Image src='/sponsoring/luis.jpeg' width={170} height={85} alt="Argutia Logo"/></a>
      </div>
      
      
      <div>
        <a href="https://pcschmiede.de/"><Image src='/sponsoring/pcschmiede.svg' width={170} height={85} alt="PC Schmiede Logo"/></a>
      </div>

      

    </footer>
  );
};
