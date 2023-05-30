import styles from './Card.module.css';

function Card({ date, name, amount }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.date}>
        <p className={styles.dateDesc}>{date}</p>
      </div>
      <p className={styles.name}>{name}</p>
      <button className={styles.amount}>${amount}</button>
    </div>
  );
}

export default Card;
