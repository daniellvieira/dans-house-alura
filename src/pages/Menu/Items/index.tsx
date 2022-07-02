import { useEffect, useState } from 'react';
import Item from './Item';
import items from 'data/menu.json';
import styles from './Items.module.scss';

interface Props {
  search: string;
  filter: number | null;
  ordering: string;
}

export default function Items (props: Props) {
  const [list, setList] = useState(items);
  const { search, filter, ordering } = props;

  const orderBy = (
    list: typeof items,
    orderKind: 'size' | 'serving' | 'price'
  ) => {
    return list.sort((a, b) => (a[orderKind] > b[orderKind] ? 1 : -1));
  };

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if ( filter !== null ) return filter === id;
    return true;
  }

  function order(newList: typeof items) {
    switch(ordering) {
    case 'lot':
      return orderBy(newList, 'size');
    case 'qtd_person':
      return orderBy(newList, 'serving');
    case 'price':
      return orderBy(newList, 'price');
    default:
      return newList;
    }
  }

  useEffect(() => {
    const newList = items.filter(item => (
      testSearch(item.title) && testFilter(item.category.id)
    ));
    setList(order(newList));
  }, [search, filter, ordering]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item
          key={item.id}
          { ...item }
        />
      ) )}
    </div>
  );
}