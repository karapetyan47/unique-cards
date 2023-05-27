import { createContext, useContext } from 'react'

const CardsContext = createContext<number[]>([])

export const CardsContextProvider = CardsContext.Provider
export const useCards = () => useContext(CardsContext)
