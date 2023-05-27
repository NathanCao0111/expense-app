import styles from './Content.module.css'
import Filter from './Filter'
import ChartContainer from './ChartContainer'
import CardList from './CardList'

function Content() {
	return (
		<div className={styles.content}>
			<Filter />
			<ChartContainer />
			<CardList />
		</div>
	)
}

export default Content