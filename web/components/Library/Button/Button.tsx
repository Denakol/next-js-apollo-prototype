import classes from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  look?: 'primary' | 'secondary' | 'danger'
}

function Button({ look = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <button className={`${classes.baseButton} ${classes[look]} ${className}`} {...props}>
      {' '}
      {children}
    </button>
  )
}

export { Button }
