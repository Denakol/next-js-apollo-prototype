import { Error } from './Error'
import React from 'react'
import classes from './Field.module.scss'

interface FieldProps {
  error?: string
  id?: string
  label?: string
}
function Field({ children, error, id, label }: React.PropsWithChildren<FieldProps>) {
  return (
    <div className={classes.field}>
      {Boolean(label) && (
        <label className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={classes.control}>{children}</div>
      {error && <Error message={error} />}
    </div>
  )
}

export { Field }
