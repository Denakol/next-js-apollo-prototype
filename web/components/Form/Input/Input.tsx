import classes from './Input.module.scss'
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  forwardedRef?: React.Ref<HTMLInputElement>
}

function InputComponent({ forwardedRef, ...props }: InputProps) {
  return <input className={classes.input} {...props} ref={forwardedRef} />
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => (
  <InputComponent {...props} forwardedRef={ref} />
))

export { Input }
