import styles from './Button.module.css'
import StoreContext from '../../../store/Context'
import { useContext } from 'react'

function Button(props) {
	const { inputContext } = useContext(StoreContext)
	const [, setInput] = inputContext

	const handleBtnDisplay = () => {
		props.onDisplay(true)
		setInput({
			name: '',
			amount: '',
			date: ''
		})
	}

	return (
		<button className={styles.btn} onClick={handleBtnDisplay}>
			ADD NEW EXPENSE
		</button>
	)
}

export default Button