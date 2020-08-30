import { useDeleteClothesMutation } from '../../../api/graphql'
import { Reference } from '@apollo/client/utilities'

function useDeleteClothes() {
  const [deleteClothes, { loading }] = useDeleteClothesMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          clothes(existingClothes = [], { readField }) {
            if (data) {
              return existingClothes.filter(
                (commentRef: Reference) => data?.deleteClothes?.id !== readField('id', commentRef),
              )
            }
            return existingClothes
          },
        },
      })
    },
  })

  return { deleteClothes, loading }
}

export { useDeleteClothes }
