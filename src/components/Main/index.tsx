import { cardsDispatch } from '../../store/cardsStore'
import { useCards } from '../../store/cardsStore/cardsContext'
import { CardActions } from '../../store/cardsStore/types'
import Card from '../Card'
import './styles.css'

const Main = () => {
  const cards = useCards()

  const handleCardRemove = (cardNumber: number) => () => {
    cardsDispatch({
      type: CardActions.Delete,
      payload: cardNumber,
    })
  }

  return (
    <div className="main">
      <div className="cards">
        {cards.map((card) => (
          <Card key={card} onRemove={handleCardRemove(card)}>
            {card}
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Main
