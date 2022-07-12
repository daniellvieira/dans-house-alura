import { ReactComponent as LogoSvg } from 'assets/logo.svg'; 
import styles from './TopBar.module.scss';

export default function TopBar() {
  return (
    <nav className={styles.topbar}>
      <LogoSvg />
    </nav>
  );
}