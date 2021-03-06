import styles from './Dish.module.scss';
import { useParams, useNavigate, Routes, Router, Route } from 'react-router-dom';
import items from 'data/menu.json';
import TagsDish from 'components/TagsDish';
import DefaultPage from 'components/DefaultPage';
import NotFound from 'pages/NotFound';

const Dish = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dish = items.find(item => item.id === Number(params.id));
  
  if (!dish) return <NotFound />;
  return (
    <Routes>
      <Route path='*' element={<DefaultPage />}>
        <Route index element={
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
                <TagsDish {...dish} />
              </div>
            </section>
          </>
        }/>
      </Route>
    </Routes>
  );
};

export default Dish;