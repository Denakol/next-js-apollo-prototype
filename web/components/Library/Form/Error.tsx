import classes from './Error.module.scss'

interface ErrorsProps {
  message?: string
}

function Error({ message }: ErrorsProps) {
  return <div className={classes.error}>{message}</div>
}

export { Error }
