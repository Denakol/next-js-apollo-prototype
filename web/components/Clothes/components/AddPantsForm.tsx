import { PantsInput, ShirtInput } from '../../../api/graphql'
import * as yup from 'yup'
import { Button, Field, Input } from '../../index'
import classes from './AddPants.module.scss'
import { useFormik } from 'formik'
import { useMemo } from 'react'
import { Colors } from '../../../types'
import { Select } from '../../Form/Select'
import { capitalizeFirstLetter } from '../../../utils'

interface AddPantsFormProps {
  isLoading: boolean
  onSubmit(values: PantsInput): void
  onCancel(): void
}

const schema = yup.object().shape<PantsInput>({
  name: yup.string(),
  W: yup.number().positive().integer().required().typeError('Please input number'),
  L: yup.number().positive().integer().required().typeError('Please input number'),
  color: yup.string().required(),
})

function AddPantsForm({ isLoading, onSubmit, onCancel }: AddPantsFormProps) {
  const { handleSubmit, errors, values, handleChange } = useFormik<PantsInput>({
    initialValues: {
      color: Colors.baseColors[0],
      W: 30,
      L: 30,
    },
    validationSchema: schema,
    onSubmit: onSubmit,
  })

  const colorsOptions = useMemo(
    () => Colors.baseColors.map(color => ({ value: color, label: capitalizeFirstLetter(color) })),
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
        <Field id="W" error={errors.W} label="W">
          <Input id="W" type="number" name="W" value={values.W} onChange={handleChange} />
        </Field>
        <Field id="L" error={errors.L} label="L">
          <Input id="L" type="number" name="L" value={values.L} onChange={handleChange} />
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

export { AddPantsForm }
