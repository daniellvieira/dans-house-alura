import logoSvg from 'assets/logo.svg';
import styles from './Item.module.scss';

interface Props {

};

export default function Item () {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={logoSvg} alt="image" />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>Macarrão</h2>
          <p>Descrição do produto</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__types}>
            Massa
          </div>
          <div className={styles.item__lot}>
            400g
          </div>
          <div className={styles.item__qtdperson}>
            Serve 2 pessoas
          </div>
          <div className={styles.item__value}>
            R$ 50,00
          </div>
        </div>
      </div>
      
    </div>
  )
};