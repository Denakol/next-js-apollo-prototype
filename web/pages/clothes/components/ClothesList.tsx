import { ClothesView } from './ClothesView'
import { Clothes } from '../../../api/graphql'

interface ClothesListProps {
  items: Clothes[]
}
function ClothesListComponent({ items }: ClothesListProps) {
  return (
    <>
      {items.map(item => (
        <ClothesView key={item.id} item={item} />
      ))}
    </>
  )
}
const ClothesList = ClothesListComponent
export { ClothesList }
