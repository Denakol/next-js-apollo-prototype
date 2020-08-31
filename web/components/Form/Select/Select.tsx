import React, { ChangeEvent } from 'react'
import classes from './Select.module.scss'

interface OptionType {
  label: string
  value: string
}

interface SelectProps {
  name: string
  id: string
  items: OptionType[]
  value?: string
  onChange?(event: ChangeEvent<HTMLSelectElement>): void
  forwardedRef?: React.Ref<HTMLSelectElement>
}

function SelectComponent({ name, id, items, value, onChange }: SelectProps) {
  return (
    <select className={classes.select} name={name} id={id} value={value} onChange={onChange}>
      {items.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  )
}

const SelectMemo = React.memo(SelectComponent)

// eslint-disable-next-line react/display-name
const Select = React.forwardRef((props: SelectProps, ref: React.Ref<HTMLSelectElement>) => (
  <SelectMemo {...props} forwardedRef={ref} />
))

export { Select }
