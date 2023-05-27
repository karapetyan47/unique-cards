import { FC, MouseEventHandler, PropsWithChildren } from 'react'
import './styles.css'

interface Props {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const IconButton: FC<PropsWithChildren<Props>> = ({
  className = '',
  onClick,
  children,
}) => {
  return (
    <button onClick={onClick} className={`icon-button ${className}`}>
      {children}
    </button>
  )
}

export default IconButton
