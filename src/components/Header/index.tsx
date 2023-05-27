import { useCallback } from 'react'
import { cardsDispatch } from '../../store/cardsStore'
import { CardActions } from '../../store/cardsStore/types'
import Button from '../Button'
import './style.css'

const Header = () => {
  const handleCreateCard = useCallback(() => {
    cardsDispatch({
      type: CardActions.Create,
    })
  }, [])

  const handleSortCards = useCallback(() => {
    cardsDispatch({
      type: CardActions.Sort,
    })
  }, [])

  return (
    <div className="header">
      <div className="header_buttons">
        <Button onClick={handleCreateCard}>add card</Button>
        <Button onClick={handleSortCards}>sort cards</Button>
      </div>
    </div>
  )
}

export default Header
