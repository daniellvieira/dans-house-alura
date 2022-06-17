import styles from './Menu.module.scss';
import { ReactComponent as LogoSvg } from 'assets/logo.svg'; 

export default function Menu() {
  return (
    <main>
      <nav className={styles.menu}>
        <LogoSvg />
      </nav>
    </main>
  )  
}