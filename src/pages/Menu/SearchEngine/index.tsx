import React from "react";
import styles from './SearchEngine.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
};

export default function SearchEngine({ search, setSearch }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder='Buscar'
      />
      <CgSearch 
        size={20}
        color='#4D4C5E'
      />
    </div>
  )
};