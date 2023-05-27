import clsx from 'clsx'
import styles from './Card.module.css'

function Card(props) {
	const { day, month, year, description, price } = props
	return (
		<div className={styles.cardContainer}>
			<div className={styles.date}>
				<p className={clsx(styles.dateDesc, styles.dateDescDay)}>{day}</p>
				<p className={styles.dateDesc}>{month}</p>
				<p className={styles.dateDesc}>{year}</p>
			</div>
			<p className={styles.cardDesc}>{description}</p>
			<button className={styles.price}>
				{price}
			</button>
		</div>
	)
}

export default Card