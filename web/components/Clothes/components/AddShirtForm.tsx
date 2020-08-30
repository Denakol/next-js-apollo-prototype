import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { ShirtColor, ShirtInput } from '../../../api/graphql'
import { yupResolver } from '@hookform/resolvers'
import { Button, Field, Input } from '../../index'

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
  const { register, handleSubmit, errors } = useForm<ShirtInput>({
    resolver: yupResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field id="name" error={errors.name} label="Name">
          <Input id="name" type="text" name="name" ref={register()} />
        </Field>
        <Field id="color" error={errors.color} label="Color">
          <Input id="color" type="text" name="color" ref={register()} />
        </Field>
        <Field id="size" error={errors.size} label="Size">
          <Input id="size" type="number" name="size" ref={register()} />
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
