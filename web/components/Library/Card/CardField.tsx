import { ReactNode } from 'react'
import classes from './CardField.module.scss'

interface CardFieldProps {
  label: ReactNode
  text: ReactNode
}

function CardField({ label, text }: CardFieldProps) {
  return (
    <div className={classes.cardField}>
      <div className={classes.cardFieldLabel}>{label}</div>
      <div className={classes.cardFieldText}>{text}</div>
    </div>
  )
}

export { CardField }
