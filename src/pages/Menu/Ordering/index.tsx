import styles from './Ordering.module.scss';
import options from './options.json';

export default function Ordering() {
  return (
    <button className={styles.ordering}>
      <span>Ordenar por:</span>
      <div className={styles.ordering__options}>
        {options.map((option) => (
          <div className={styles.ordering__option} key={option.value}>
            {option.name}
          </div>
        ))}
      </div>
    </button>
  )
};