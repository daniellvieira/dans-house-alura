import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundSvg } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTheme from 'styles/Theme.module.scss';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTheme.container]: true
    })}>
      <div className={styles.back}>
        <button className={styles.back} onClick= {() => navigate(-1)}>
          {'< Voltar'}
        </button>

      </div>
      <NotFoundSvg />
    </div>
  );
};

export default NotFound;