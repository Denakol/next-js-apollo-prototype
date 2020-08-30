import { Shirt } from '../../../api/graphql'
import { Card, CardField } from '../../../components'

interface ShirtViewProps {
  item: Shirt
}

function ShirtView({ item }: ShirtViewProps) {
  return (
    <Card title="Shirt">
      <CardField label="Name:" text={item.name} />
      <CardField label="Color:" text={item.color} />
      <CardField label="Size:" text={item.size} />
    </Card>
  )
}

export { ShirtView }
