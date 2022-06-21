import styles from './Menu.module.scss';
import { ReactComponent as LogoSvg } from 'assets/logo.svg'; 
import { useState } from 'react';
import SearchEngine from './SearchEngine';
import Filters from './Filters';
import Ordering from './Ordering';

export default function Menu() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<number | null>(null);

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
            
          />
        </div>
      </section>
    </main>
  )  
}