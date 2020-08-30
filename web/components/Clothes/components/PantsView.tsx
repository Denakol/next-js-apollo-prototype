import { Pants } from '../../../api/graphql'
import { Card, CardField } from '../../Card'
import { Button } from '../../Button'

interface PantsView {
  item: Pants
  onDelete(id: string): void
  isDeleting: boolean
}
function PantsView({ item, onDelete, isDeleting }: PantsView) {
  return (
    <Card title="Pants">
      <CardField label="Name:" text={item.name} />
      <CardField label="Color:" text={item.color} />
      <CardField label="W:" text={item.W} />
      <CardField label="L:" text={item.L} />
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

export { PantsView }
