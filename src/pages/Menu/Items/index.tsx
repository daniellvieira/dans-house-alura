import { useEffect, useState } from 'react';
import Item from './Item';
import items from './items.json';
import styles from './Items.module.scss';

interface Props {
  search: string;
  filter: number | null;
  ordering: string;
}

export default function Items (props: Props) {
  const [list, setList] = useState(items);
  const { search, filter } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if ( filter !== null ) return filter === id;
    return true;
  }

  useEffect(() => {
    const newList = items.filter(item => (
      testSearch(item.title) && testFilter(item.category.id)
    ));
    setList(newList);
  }, [search, filter])

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item
          key={item.id}
          { ...item }
        />
      ) )}
    </div>
  )
};