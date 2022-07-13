import items from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHouseImg from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  let recommendedDishes = [...items];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0,3);
  const navigate = useNavigate();

  function redirectToDetails(dish: typeof items[0]) {
    navigate(`/dishes/${dish.id}`, { state: { dish }, replace: true });
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>
        Recomendações do Chef
      </h3>
      <div className={styles.recommended}>
        {recommendedDishes.map(item => (
          <div key={item.id} className={styles.recommend}>
            <div className={styles.recommend__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recommend__button}
              onClick={() => redirectToDetails(item)}
            >
              Ver mais
            </button>
          </div>
        ))
        }
      </div>
      <h3 className={stylesTheme.title}>Nossa casa</h3>
      <div className={styles.ourHouse}>
        <img src={ourHouseImg} alt='Casa do Aluroni' />
        <div className={styles.ourHouse__address}>
          Rua José Cândido, 141 <br /> <br /> Fortaleza - CE
        </div>
      </div>
    </section>
  );
}