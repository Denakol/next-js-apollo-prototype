import { Shirt } from '../../../../api/graphql'
import { CardField } from '../../../index'

interface ShirtViewProps {
  item: Shirt
}

function ShirtView({ item }: ShirtViewProps) {
  return (
    <>
      <CardField label="Name:" text={item.name} />
      <CardField label="Color:" text={item.color} />
      <CardField label="Size:" text={item.size} />
    </>
  )
}

export { ShirtView }
