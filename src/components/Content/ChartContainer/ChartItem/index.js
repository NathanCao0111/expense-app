import styles from './ChartItem.module.css'

function ChartItem() {
	return (
		<div className={styles.chartItemContainer}>
			<div className={styles.chartItem}>
				<div className={styles.chartActive}>

				</div>
			</div>
			<p className={styles.desc}>Aug</p>
		</div>
	)
}

export default ChartItem