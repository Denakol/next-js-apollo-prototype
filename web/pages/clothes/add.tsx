import { useCallback, useState } from 'react'
import { PantsInput, ShirtInput } from '../../api/graphql'
import { AddPantsForm, AddShirtForm } from '../../components/Clothes/components'
import { useRouter } from 'next/router'
import { Card, Checkbox, Field, PageHeader } from '../../components'
import classes from './add.module.scss'
import { useCreatePants, useCreateShirt } from '../../components/Clothes/hooks'

const AddNewClothes = () => {
  const router = useRouter()
  const [isShirts, setIsShirts] = useState(true)

  const { create: createPants, loading: createPantsLoading } = useCreatePants()
  const { create: createShirt, loading: createShirtLoading } = useCreateShirt()

  const redirectToTable = useCallback(() => {
    router.push('/clothes')
  }, [router])

  const handleCreatePants = useCallback(
    async (values: PantsInput) => {
      await createPants({ variables: { input: values } })
      redirectToTable()
    },
    [createPants, redirectToTable],
  )

  const handleCreateShirt = useCallback(
    async (values: ShirtInput) => {
      await createShirt({ variables: { input: values } })
      redirectToTable()
    },
    [createShirt, redirectToTable],
  )

  return (
    <>
      <PageHeader text="Add New Clothes" />
      <Card>
        <Field label="Choose Type">
          <div className={classes.typeBlock}>
            <div className={classes.typeItem}>
              <Checkbox
                type="radio"
                onChange={() => setIsShirts(true)}
                name="type"
                id="shirtType"
                value="shirtType"
                checked={isShirts}>
                Shirts
              </Checkbox>
            </div>
            <div className={classes.typeItem}>
              <Checkbox
                type="radio"
                onChange={() => setIsShirts(false)}
                name="type"
                id="pantsType"
                value="pantsType"
                checked={!isShirts}>
                Pants
              </Checkbox>
            </div>
          </div>
        </Field>

        {isShirts ? (
          <AddShirtForm
            onSubmit={handleCreateShirt}
            isLoading={createShirtLoading}
            onCancel={redirectToTable}
          />
        ) : (
          <AddPantsForm
            onSubmit={handleCreatePants}
            isLoading={createPantsLoading}
            onCancel={redirectToTable}
          />
        )}
      </Card>
    </>
  )
}
export default AddNewClothes
