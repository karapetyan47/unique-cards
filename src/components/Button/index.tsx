import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import './styles.css'

const Button: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ className = '', ...props }) => {
  return <button className={`button ${className}`} {...props} />
}

export default Button
