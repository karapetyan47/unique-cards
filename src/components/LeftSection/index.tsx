import CardsProvider from '../../store/cardsStore'
import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'

const LeftSection = () => {
  return (
    <div className="left-section">
      <CardsProvider>
        <Header />
        <Main />
      </CardsProvider>
      <Footer />
    </div>
  )
}

export default LeftSection
