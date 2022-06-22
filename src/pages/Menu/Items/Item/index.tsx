import styles from './Item.module.scss';
import items from '../items.json';
import classNames from "classnames";

type Props = typeof items[0]; 

export default function Item (props: Props) {
  const { title, description, category, price, serving, size, photo} = props;

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
              [styles.item__categories]: true,
              [styles[`item__categories__${category.label.toLowerCase()}`]]: true
            })}>{category.label}</div>
          <div className={styles.item__size}>{size}g</div>
          <div className={styles.item__serving}>
            Serve {serving} pessoa{serving === 1 ? '' : 's' }
          </div>
          <div className={styles.item__value}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
      
    </div>
  )
};