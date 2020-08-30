import { Shirt } from '../../../api/graphql'
import { Button, Card, CardField } from '../../index'

interface ShirtViewProps {
  item: Shirt
  onDelete(id: string): void
  isDeleting: boolean
}

function ShirtView({ item, onDelete, isDeleting }: ShirtViewProps) {
  return (
    <Card title="Shirt">
      <CardField label="Name:" text={item.name} />
      <CardField label="Color:" text={item.color} />
      <CardField label="Size:" text={item.size} />
      <Button
        look="danger"
        disabled={isDeleting}
        onClick={() => {
          onDelete(item.id)
        }}>
        Remove
      </Button>
    </Card>
  )
}

export { ShirtView }
