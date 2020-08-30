import { useCreatePantsMutation } from '../../../api/graphql'
import { gql } from '@apollo/client'

function useCreatePants() {
  const [create, { loading }] = useCreatePantsMutation({
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
            return existingClothes
          },
        },
      })
    },
  })

  return { create, loading }
}

export { useCreatePants }
