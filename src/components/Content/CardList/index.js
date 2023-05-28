import styles from "./CardList.module.css";
import Card from "./Card";
import { useContext } from "react";
import StoreContext from '../../../store/Context'

function CardList() {
  const { cardsContext } = useContext(StoreContext)
  const [cards, ] = cardsContext

  return (
		<div className={styles.cardList}>
		{
			cards.map((element, index) => {
				return <Card 
				key={index}
				date={element.date}
				name={element.name}
				amount={element.amount}
				/>
			})
		}
		</div>);
}

export default CardList;
