import styles from "./CardList.module.css";
import Card from "./Card";
import { useContext } from "react";
import StoreContext from '../../../store/Context'

function CardList() {
  const { cardsContext } = useContext(StoreContext)
  const [cards, setCards] = cardsContext

  return (
		<div className={styles.cardList}>
		{
			cards.map((element, index) => {
				return <Card 
				key={index}
				day={element.day}
				month={element.month}
				year={element.year}
				description={element.description}
				price={element.price}
				/>
			})
		}
		</div>);
}

export default CardList;
