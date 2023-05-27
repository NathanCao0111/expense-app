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
      day: 16,
      month: "January",
      year: 2023,
      description: "Some books",
      price: "$50",
    },
    {
      day: 10,
      month: "April",
      year: 2023,
      description: "Electricity Bill",
      price: "$75",
    },
    {
      day: 8,
      month: "May",
      year: 2023,
      description: "New Bike",
      price: "$100",
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