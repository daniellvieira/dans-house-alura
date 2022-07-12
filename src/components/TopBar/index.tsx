import { ReactComponent as LogoSvg } from 'assets/logo.svg'; 
import styles from './TopBar.module.scss';

export default function TopBar() {
  const routes = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/menu'
  }, {
    label: 'Sobre',
    to: '/about'
  }];

  return (
    <nav className={styles.topbar}>
      <LogoSvg />
      <ul className={styles.topbar__list}>
        {routes.map((route, index) => (
          <li key={index} className={styles.topbar__link}>
            <a href={route.to}>
              {route.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}