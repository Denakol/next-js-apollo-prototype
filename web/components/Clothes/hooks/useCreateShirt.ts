import { useCreateShirtMutation } from '../../../api/graphql'
import { gql } from '@apollo/client'

function useCreateShirt() {
  const [create, { loading }] = useCreateShirtMutation({
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
            return existingClothes
          },
        },
      })
    },
  })

  return { create, loading }
}

export { useCreateShirt }
