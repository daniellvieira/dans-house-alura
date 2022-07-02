import styles from './Menu.module.scss';
import { ReactComponent as LogoSvg } from 'assets/logo.svg'; 
import { useState } from 'react';
import SearchEngine from './SearchEngine';
import Filters from './Filters';
import Ordering from './Ordering';
import Items from './Items';

export default function Menu() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<number | null>(null);
  const [ordering, setOrdering] = useState<string>("");

  return (
    <main>
      <nav className={styles.cardapio}>
        <LogoSvg />
        Casa do Dan
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa.
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__title}>Cardápio</h3>
        <SearchEngine
          search={search}
          setSearch={setSearch}
        />
        <div className={styles.cardapio__filters}>
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
    </main>
  )  
}