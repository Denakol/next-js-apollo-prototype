import React, { useCallback } from 'react'
import { Clothes, Pants, Shirt } from '../../../api/graphql'
import { ShirtView } from './ShirtView'
import { PantsView } from './PantsView'
import { useDeleteClothes } from '../hooks'

function isShirt(clothes: Clothes): clothes is Shirt {
  return (clothes as Shirt).size !== undefined
}

function isPants(clothes: Clothes): clothes is Pants {
  return (clothes as Pants).W !== undefined
}

interface ClothesViewProps {
  item: Clothes
}
function ClothesViewComponent({ item }: ClothesViewProps) {
  const { deleteClothes, loading } = useDeleteClothes()

  const handleOnDelete = useCallback(
    (id: string) => {
      deleteClothes({ variables: { input: { id } } })
    },
    [deleteClothes],
  )

  if (isShirt(item)) {
    return <ShirtView item={item} onDelete={handleOnDelete} isDeleting={loading} />
  }
  if (isPants(item)) {
    return <PantsView item={item} onDelete={handleOnDelete} isDeleting={loading} />
  }
  return <div />
}

const ClothesView = React.memo(ClothesViewComponent)

export { ClothesView }
