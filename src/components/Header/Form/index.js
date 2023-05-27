import { useContext } from "react"
import StoreContext from 'react'
import clsx from "clsx"
import styles from './Form.module.css'


function Form(props) {
	const { inputContext } = useContext(StoreContext)
	const [input, setInput] = inputContext

	const handleBtnCancel = () => {
		props.onDisplay(false)
	}

	return (
		<form className={styles.form} onSubmit={e => e.preventDefault()}>
			<div className={styles.inputContainer}>
				<label className={styles.label}>Name</label>
				<input 
				type="text"
				placeholder="Enter name here ..."
				value={input.name}
				onChange={e => setInput(e.target.value)}
				className={styles.input}
				/>
			</div>
			<div className={styles.inputContainer}>
				<label className={styles.label}>Amount</label>
				<input 
				type="text"
				placeholder="Enter amount here ..."
				value={input.amount}
				onChange={e => setInput(e.target.value)}
				className={styles.input}
				/>
			</div>
			<div className={styles.inputContainer}>
				<label className={styles.label}>Date</label>
				<input 
				type="text"
				placeholder="dd/mm/yy"
				value={input.date}
				onChange={e => setInput(e.target.value)}
				className={styles.input}
				/>
			</div>
			<div className={styles.btnContainer}>
				<button className={clsx(styles.btn, styles.btnPrimary)}>ADD</button>
				<button className={styles.btn} onClick={handleBtnCancel}>CANCEL</button>
			</div>
		</form>
	)
}

export default Form