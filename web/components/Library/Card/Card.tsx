import classes from './Card.module.scss'

interface CardProps {
  title?: string
}
function Card({ title, children }: React.PropsWithChildren<CardProps>) {
  return (
    <div className={classes.card}>
      {title && <div className={classes.cardTitle}>{title}</div>}
      <div className={classes.cardBody}>{children}</div>
    </div>
  )
}

export { Card }
