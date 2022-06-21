import styles from './Ordering.module.scss';
import options from './options.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

interface Props {
  ordering: string,
  setOrdering: React.Dispatch<React.SetStateAction<string>>,
}

export default function Ordering({ ordering, setOrdering }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const nameOrdering = ordering && options.find(option => option.value === ordering)?.name

  return (
    <button
      className={classNames({
        [styles.ordering]: true,
        [styles['styles.ordering--active']]: ordering !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameOrdering || 'Ordenar por:'}</span>
      { open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [styles.ordering__options]: true,
        [styles['ordering__options--active']]: open,
      })}>
        {options.map((option) => (
          <div
            className={styles.ordering__option}
            key={option.value}
            onClick={() => setOrdering(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  )
};
