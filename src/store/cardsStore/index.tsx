import { FC, PropsWithChildren, useReducer } from 'react'
import { cardsReducer } from './cardsReducer'
import { CardsContextProvider } from './cardsContext'
import { CardActions } from './types'
import cardsService from '../../services/cardsService'

export let cardsDispatch: React.Dispatch<{
  type: CardActions
  payload?: number | undefined
}>

const CardsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cards, dispatch] = useReducer(cardsReducer, cardsService.cards)

  cardsDispatch = dispatch

  return <CardsContextProvider value={cards}>{children}</CardsContextProvider>
}

export default CardsProvider
