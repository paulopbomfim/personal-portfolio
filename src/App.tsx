import {
  Circle, LinkedinLogo, MapPin, Phone, WhatsappLogo,
} from 'phosphor-react';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from './styles/App.module.scss';

export default function App() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.userCard}>
          <div className={styles.userData}>
            <div className={styles.avatar}>
              <img src="http://github.com/paulopbomfim.png" alt="Paulo Bomfim" />
            </div>

            <div className={styles.userInfo}>
              <h1>
                Paulo
                <strong> Bomfim</strong>
              </h1>
              <div>
                <p>Desenvolvedor Front end</p>
                <p>React | Javascript</p>
              </div>
              <div className={styles.location}>
                <MapPin size={22} weight="bold" />
                <span>Brasília</span>
              </div>
              <div className={styles.status}>
                <Circle size={22} weight="fill" />
                <span>Open to work</span>
              </div>
            </div>
          </div>

          <div className={styles.about}>
            <div className={styles.bio}>
              <h2>Bio</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lectus arcu bibendum at varius vel pharetra vel.
              </p>
            </div>
            <div className={styles.links}>
              <a href="">
                <WhatsappLogo size={22} />
                Entre em contato
              </a>
              <a href="https://github.com/paulopbomfim">
                <AiFillGithub size={22} />
                Github
              </a>
            </div>
          </div>

          <div className={styles.contact}>
            <h2>Contato</h2>
            <div className={styles.phone}>
              <Phone size={22} />
              <span>(61) 9 9952-6521</span>
            </div>
            <div className={styles.social}>
              <a href="https://www.linkedin.com/in/paulopbomfim/">
                <LinkedinLogo size={32} />
              </a>
              <a href="https://github.com/paulopbomfim">
                <AiFillGithub size={32} />
              </a>
            </div>
          </div>
        </div>

      </header>
      <main>
        <nav>
          <Link to="/projects">
            Projetos
          </Link>
          <Link to="/studies">
            Estudos
          </Link>
        </nav>
      </main>
    </div>
  );
}
