import React from 'react'
import classes from './Checkbox.module.scss'

interface CheckboxProps {
  className?: string
  disabled?: boolean
  checked?: boolean
  name?: string
  id?: string
  value?: string
  type?: 'checkbox' | 'radio'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Checkbox({ type = 'checkbox', children, ...props }: React.PropsWithChildren<CheckboxProps>) {
  const Checkbox = null
  const Radio = props.checked ? (
    <div className={classes.radioFilled}>
      <div className={classes.radioFilledPoint} />
    </div>
  ) : (
    <div className={classes.radioDefault} />
  )

  return (
    <div className={`${classes.wrapper} ${props.className}`}>
      <input
        className={classes.input}
        type={type}
        id={props.id}
        name={props.name}
        checked={props.checked}
        disabled={props.disabled}
        value={props.value}
        onChange={props.disabled ? undefined : props.onChange}
      />
      <label className={classes.label} htmlFor={props.id || props.name}>
        {type === 'checkbox' ? Checkbox : Radio}
      </label>
      <label className={classes.textLabel} htmlFor={props.id || props.name}>
        {children}
      </label>
    </div>
  )
}

export { Checkbox }
