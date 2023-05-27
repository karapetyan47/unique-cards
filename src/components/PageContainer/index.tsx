import './styles.css'
import LeftSection from '../LeftSection'
import RightSection from '../RightSection'

const PageContainer = () => {
  return (
    <div className="page-container">
      <div className="left">
        <LeftSection />
      </div>
      <div className="right">
        <RightSection />
      </div>
    </div>
  )
}

export default PageContainer
