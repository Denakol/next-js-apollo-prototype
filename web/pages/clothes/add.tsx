import { useCallback, useState } from 'react'
import { PantsInput, ShirtInput, useCreatePantsMutation, useCreateShirtMutation } from '../../api/graphql'
import { AddPantsForm, AddShirtForm } from './components'
import { useRouter } from 'next/router'
import { Card, Checkbox, Field, Layout, PageHeader } from '../../components'
import classes from './add.module.scss'
import { gql } from '@apollo/client'

const AddNewClothes = () => {
  const router = useRouter()

  const [isShirts, setIsShirts] = useState(true)

  const [createPants, { loading: createPantsLoading }] = useCreatePantsMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          clothes(existingClothes = []) {
            if (data) {
              const newTodoRef = cache.writeFragment({
                data: data.createPants,
                fragment: gql`
                  fragment NewTodo on Pants {
                    id
                  }
                `,
              })
              return [...existingClothes, newTodoRef]
            }
            return [...existingClothes]
          },
        },
      })
    },
  })
  const [createShirt, { loading: createShirtLoading }] = useCreateShirtMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          clothes(existingClothes = []) {
            if (data) {
              const newTodoRef = cache.writeFragment({
                data: data.createShirt,
                fragment: gql`
                  fragment NewTodo on Shirt {
                    id
                  }
                `,
              })
              return [...existingClothes, newTodoRef]
            }
            return [...existingClothes]
          },
        },
      })
    },
  })

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
    <Layout>
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
    </Layout>
  )
}
export default AddNewClothes
