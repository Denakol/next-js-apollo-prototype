import classes from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  look?: 'primary' | 'secondary' | 'danger'
}

function Button({ look = 'primary', children, ...props }: ButtonProps) {
  return (
    <button className={classes[look]} {...props}>
      {' '}
      {children}
    </button>
  )
}

export { Button }
