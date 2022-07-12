import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundSvg } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTheme from 'styles/Theme.module.scss';

const NotFound = () => {
  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTheme.container]: true
    })}>
      <NotFoundSvg />
    </div>
  );
};

export default NotFound;