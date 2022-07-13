import styles from './Dish.module.scss';
import { useParams } from 'react-router-dom';

const Dish = () => {
  const params = useParams();

  return (
    <div>Dish {params.id}</div>
  );
};

export default Dish;