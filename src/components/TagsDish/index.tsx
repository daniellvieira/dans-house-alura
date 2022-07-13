import styles from './TagsDish.module.scss';
import classNames from 'classnames';
import { Dish } from 'types/Dish';

const TagsDish = ({category, size, serving, price}: Dish) => {
  return (
    <div className={styles.tags}>
      <div className={classNames(
        styles.tags__kind,
        styles[`tags__kind__${category.label.toLowerCase()}`]
      )}>{category.label}</div>
      <div className={styles.tags__size}>{size}g</div>
      <div className={styles.tags__serving}>
        Serve {serving} pessoa{serving === 1 ? '' : 's' }
      </div>
      <div className={styles.tags__price}>R$ {price.toFixed(2)}</div>
    </div>
  );
};

export default TagsDish;