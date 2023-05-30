import styles from './ChartItem.module.css';

function ChartItem({ percent, month }) {
  return (
    <div className={styles.chartItemContainer}>
      <div className={styles.chartItem}>
        <div className={styles.chartActive} style={{ height: `${percent}%` }}></div>
      </div>
      <p className={styles.desc}>{month}</p>
    </div>
  );
}

export default ChartItem;
