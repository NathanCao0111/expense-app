import styles from './CardList.module.css';
import Card from './Card';

function CardList({ filterYearData }) {
  return (
    <div className={styles.cardList}>
      {filterYearData.map((element) => {
        return <Card key={element.id} date={element.date} name={element.name} amount={element.amount} />;
      })}
    </div>
  );
}

export default CardList;
