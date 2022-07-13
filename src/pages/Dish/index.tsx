import styles from './Dish.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import items from 'data/menu.json';

const Dish = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dish = items.find(item => item.id === Number(params.id));
  
  return (dish && 
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {' < Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{ dish.title }</h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{ dish.description }</p>
          <div className={styles.tags}>
            <div className={classNames({
              [styles.tags__kind]: true,
              [styles[`tags__kind__${dish.category.label.toLowerCase()}`]]: true
            })}>
              { dish.category.label }
            </div>
            <div className={styles.tags__size}>
              { dish.size }g
            </div>
            <div className={styles.tags__serving}>
              Serve { dish.serving } pessoa{dish.serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__value}>
              R$ { dish.price.toFixed(2) }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dish;