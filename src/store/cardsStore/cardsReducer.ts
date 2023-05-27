import cardsService from '../../services/cardsService'
import { CardActions } from './types'

export const cardsReducer = (
  state: number[],
  action: {
    type: CardActions
    payload?: number
  }
): number[] => {
  const handleRemoveCard = () =>
    cardsService.removeCard(action.payload as number)

  const handleCreateCard = () => cardsService.addCard()

  const handleSortCards = () => cardsService.sortCards()

  const mappedHandlers = {
    [CardActions.Create]: handleCreateCard,
    [CardActions.Delete]: handleRemoveCard,
    [CardActions.Sort]: handleSortCards,
  }

  const newState = mappedHandlers[action.type]?.()

  localStorage.cards = newState

  return newState || state
}
