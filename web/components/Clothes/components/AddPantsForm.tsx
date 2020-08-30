import { PantsInput } from '../../../api/graphql'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'
import { Button, Field, Input } from '../../index'

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
  const { register, handleSubmit, errors } = useForm<PantsInput>({
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
        <Field id="W" error={errors.W} label="W">
          <Input id="W" type="number" name="W" ref={register()} />
        </Field>
        <Field id="L" error={errors.L} label="L">
          <Input id="L" type="number" name="L" ref={register()} />
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
