import { useState } from 'react';
import SearchEngine from './SearchEngine';
import Filters from './Filters';
import Ordering from './Ordering';
import Items from './Items';
import { optionsOrdering } from 'types/optionsOrdering';
import styles from './Menu.module.scss';
import stylesTheme from 'styles/Theme.module.scss';

export default function Menu() {
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<number | null>(null);
  const [ordering, setOrdering] = useState<optionsOrdering>('');

  return (
    <section className={styles.menu}>
      <h3 className={stylesTheme.title}>Cardápio</h3>
      <SearchEngine
        search={search}
        setSearch={setSearch}
      />
      <div className={styles.menu__filters}>
        <Filters
          filter={filter}
          setFilter={setFilter}
        />
        <Ordering
          ordering={ordering}
          setOrdering={setOrdering}
        />
      </div>
      <Items search={search} filter={filter} ordering={ordering}/>
    </section>
  );  
}