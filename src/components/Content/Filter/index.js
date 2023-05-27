import styles from './Filter.module.css'

function Filter() {
	return (
		<div className={styles.filter}>
			<h3 className={styles.heading}>Filter by year</h3>
			<div className={styles.selectContainer}>
				<select className={styles.select}>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
				</select>
			</div>
		</div>
	)
}

export default Filter