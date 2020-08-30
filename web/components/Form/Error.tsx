import classes from './Error.module.scss'

interface ErrorsProps {
  message?: string
  type: string
}

function Error({ message, type }: ErrorsProps) {
  return <div className={classes.error}>{message || type}</div>
}

export { Error }
