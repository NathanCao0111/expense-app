import { useContext } from "react"
import StoreContext from '../../../store/Context'
import clsx from "clsx"
import styles from './Form.module.css'


function Form(props) {
	const { inputContext, cardsContext } = useContext(StoreContext)
	const [input, setInput] = inputContext
	const [cards, setCards] = cardsContext

	const handleBtnCancel = () => {
		props.onDisplay(false)
	}

	const handleBtnAdd = () => {
		setCards(prev => [...prev, input])
	}

	return (
		<form className={styles.form} onSubmit={e => e.preventDefault()}>
			<div className={styles.inputContainer}>
				<label className={styles.label}>Name</label>
				<input 
				type="text"
				placeholder="Enter name here ..."
				value={input.name}
				onChange={e => setInput(prev => ({
					...prev,
					name: e.target.value
				}))}
				className={styles.input}
				/>
			</div>
			<div className={styles.inputContainer}>
				<label className={styles.label}>Amount</label>
				<input 
				type="text"
				placeholder="Enter amount here ..."
				value={input.amount}
				onChange={e => setInput(prev => ({
					...prev,
					amount: e.target.value
				}))}
				className={styles.input}
				/>
			</div>
			<div className={styles.inputContainer}>
				<label className={styles.label}>Date</label>
				<input 
				type="text"
				placeholder="dd/mm/yy"
				value={input.date}
				onChange={e => setInput(prev => ({
					...prev,
					date: e.target.value
				}))}
				className={styles.input}
				/>
			</div>
			<div className={styles.btnContainer}>
				<button className={clsx(styles.btn, styles.btnPrimary)} onClick={handleBtnAdd}>ADD</button>
				<button className={styles.btn} onClick={handleBtnCancel}>CANCEL</button>
			</div>
		</form>
	)
}

export default Form