import StoreContext from './Context'
import { useState } from 'react'

function Provider({ children }) {
	const [input, setInput] = useState({
		name: '',
		amount: '',
		date: ''
	})

	const [cards, setCards] = useState([
    {
      date: '16 January 2023',
      name: "Some books",
      amount: "$50",
    },
    {
      date: '10 April 2023',
      name: "Electricity Bill",
      amount: "$75",
    },
    {
      date: '8 May 2023',
      name: "New Bike",
      amount: "$100",
    },
  ])

	const store = {
		inputContext: [input, setInput],
		cardsContext: [cards, setCards]
	}

	return (
		<StoreContext.Provider value={store}>
			{children}
		</StoreContext.Provider>
	)
}

export default Provider