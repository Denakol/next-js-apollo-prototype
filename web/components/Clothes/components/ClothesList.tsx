import { ClothesView } from './View/ClothesView'
import { Clothes } from '../../../api/graphql'
import { Card } from '../../Library'
import classes from './ClothesList.module.scss'

interface ClothesListProps {
  items: Clothes[]
}
function ClothesListComponent({ items }: ClothesListProps) {
  return (
    <>
      {items.map(item => (
        <ClothesView key={item.id} item={item} />
      ))}
      {items.length === 0 && (
        <Card>
          <div className={classes.emptyMessage}>No items found. Please create new one.</div>
        </Card>
      )}
    </>
  )
}
const ClothesList = ClothesListComponent
export { ClothesList }
