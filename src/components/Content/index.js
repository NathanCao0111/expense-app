import styles from './Content.module.css';
import Filter from './Filter';
import ChartContainer from './ChartContainer';
import CardList from './CardList';
import { useState, useContext } from 'react';
import StoreContext from '../../store/Context';

function Content() {
  const { dataContext } = useContext(StoreContext);
  const [data] = dataContext;

  const [year, setYear] = useState('all');

  const filterYear = data.filter((element) => {
    return year === element.date.split('/')[2];
  });

  const filterYearData = year === 'all' ? data : filterYear;

  return (
    <div className={styles.content}>
      <Filter year={year} setYear={setYear} />
      <ChartContainer filterYearData={filterYearData} />
      <CardList filterYearData={filterYearData} />
    </div>
  );
}

export default Content;
