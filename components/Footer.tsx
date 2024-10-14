import NextLink from 'next/link';
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
          <li className={styles.student}><NextLink href="https://asta-kit.de">AStA &rarr;</NextLink></li>
          <li className={styles.books}><NextLink href="https://kit.edu">KIT &rarr;</NextLink></li>
          <li className={styles.council}><NextLink href="https://fsmi.uni-karlsruhe.de">Fachschaft &rarr;</NextLink></li>
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
        <NextLink href="https://www.andrena.de/"><img src='/sponsoring/andrena.png' width={150}/></NextLink>
      </div>

      <div>
        <NextLink href="https://metaphacts.com/"><img src='/sponsoring/metaphacts.png' width={170}/></NextLink>
      </div>
      
      
      <div>
        <NextLink href="https://www.badische-backstub.de/"><img src='/sponsoring/badischeBackstub.png' width={170}/></NextLink>
      </div>

      

    </footer>
  );
};
