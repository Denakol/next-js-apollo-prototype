import React from 'react'
import { Clothes, Pants, Shirt } from '../../../api/graphql'
import { ShirtView } from './ShirtView'

import { PantsView } from './PantsView'
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
  if (isShirt(item)) {
    return <ShirtView item={item} />
  }
  if (isPants(item)) {
    return <PantsView item={item} />
  }
  return <div />
}

const ClothesView = React.memo(ClothesViewComponent)

export { ClothesView }
