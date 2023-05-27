import generateRandomNumber from '../utils/generateRandomNumber'

class CardsService {
  private static initializeNumbersSet = () => {
    const initialCards = localStorage.getItem('cards')

    if (initialCards) {
      return new Set(initialCards.split(',').map(Number))
    }

    return new Set([])
  }

  private cardsSet: Set<number>
  private doesCardExists = (card: number) => this.cardsSet.has(card)
  private writeToLocalStorage = () => {
    localStorage.setItem('cards', JSON.stringify(this.cards))
  }

  constructor() {
    this.cardsSet = CardsService.initializeNumbersSet()
  }

  addCard = (): number[] => {
    const newCard = generateRandomNumber()

    if (this.doesCardExists(newCard)) return this.addCard()
    this.cardsSet.add(newCard)
    this.writeToLocalStorage()

    return this.cards
  }

  removeCard = (number: number) => {
    this.cardsSet.delete(number)
    this.writeToLocalStorage()

    return this.cards
  }

  sortCards = () => {
    const sortedCards = this.cards.sort((a, b) => a - b)
    this.cardsSet = new Set(sortedCards)
    this.writeToLocalStorage()

    return this.cards
  }

  get cards() {
    return Array.from(this.cardsSet)
  }
}

export default new CardsService()
