import styles from './Footer.module.scss';
import { ReactComponent as LogoSvg } from 'assets/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LogoSvg />
    </footer>
  );
};

export default Footer;