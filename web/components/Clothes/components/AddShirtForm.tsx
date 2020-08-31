import * as yup from 'yup'
import { ShirtColor, ShirtInput } from '../../../api/graphql'
import { Button, Field, Input } from '../../index'
import classes from './AddShirtForm.module.scss'
import { Select } from '../../Form/Select'
import { useMemo } from 'react'
import { Colors } from '../../../types'
import { useFormik } from 'formik'
import { capitalizeFirstLetter } from '../../../utils'

interface AddShirtFormProps {
  isLoading: boolean
  onSubmit(values: ShirtInput): void
  onCancel(): void
}

const schema = yup.object().shape<ShirtInput>({
  name: yup.string(),
  color: yup.mixed().oneOf(Object.values(ShirtColor)).required(),
  size: yup.number().positive().integer().required().typeError('Please input number'),
})

function AddShirtForm({ isLoading, onSubmit, onCancel }: AddShirtFormProps) {
  const { handleSubmit, errors, values, handleChange } = useFormik<ShirtInput>({
    initialValues: {
      color: ShirtColor.White,
      size: 10,
    },
    validationSchema: schema,
    onSubmit: onSubmit,
  })

  const colorsOptions = useMemo(
    () => Colors.shirtColors.map(color => ({ value: color, label: capitalizeFirstLetter(color) })),
    [Colors],
  )

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.formBody}>
        <Field id="name" error={errors.name} label="Name">
          <Input id="name" type="text" name="name" value={values.name || ''} onChange={handleChange} />
        </Field>
        <Field id="color" error={errors.color} label="Color">
          <Select
            id="color"
            name="color"
            items={colorsOptions}
            value={values.color}
            onChange={handleChange}
          />
        </Field>
        <Field id="size" error={errors.size} label="Size">
          <Input id="size" type="number" name="size" value={values.size} onChange={handleChange} />
        </Field>
      </div>
      <Button look="secondary" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" disabled={isLoading}>
        Create
      </Button>
    </form>
  )
}
export { AddShirtForm }
