import React, { useCallback } from 'react'
import { Clothes } from '../../../../api/graphql'
import { ShirtView } from './ShirtView'
import { PantsView } from './PantsView'
import { useDeleteClothes } from '../../hooks'
import { isShirt } from '../../types'
import { Card, Button } from '../../../Library'
import classes from './ClothesView.module.scss'

interface ClothesViewProps {
  item: Clothes
}
function ClothesViewComponent({ item }: ClothesViewProps) {
  const { deleteClothes, loading } = useDeleteClothes()

  const handleOnDelete = useCallback(() => {
    deleteClothes({ variables: { input: { id: item.id } } })
  }, [deleteClothes, item.id])

  const view = isShirt(item) ? <ShirtView item={item} /> : <PantsView item={item} />
  const title = isShirt(item) ? 'Shirt' : 'Pants'

  return (
    <Card title={title}>
      <div className={classes.clothesBody}>
        <div className={classes.fieldsBlock}>{view}</div>
        <Button look="danger" disabled={loading} onClick={handleOnDelete} className="actionBlock">
          Remove
        </Button>
      </div>
    </Card>
  )
}

const ClothesView = React.memo(ClothesViewComponent)

export { ClothesView }
