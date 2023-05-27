import { FC, PropsWithChildren } from 'react'
import './styles.css'
import IconButton from '../IconButton'
import XIcon from '../../assets/XIcon'

interface Props {
  onRemove: () => void
}

const Card: FC<PropsWithChildren<Props>> = ({ children, onRemove }) => {
  return (
    <div className="card">
      <div className="card_remove">
        <IconButton onClick={onRemove}>
          <XIcon />
        </IconButton>
      </div>
      <span className="card_content">{children}</span>
    </div>
  )
}

export default Card
