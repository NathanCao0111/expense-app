import styles from './CardList.module.css';
import Card from './Card';

function CardList({ filterYearData }) {
  return (
    <div className={styles.cardList}>
      {filterYearData.map((element, index) => {
        return <Card key={index} date={element.date} name={element.name} amount={element.amount} />;
      })}
    </div>
  );
}

export default CardList;
