import { Pants } from '../../../api/graphql'
import { Card, CardField } from '../../../components/Card'

interface PantsView {
  item: Pants
}
function PantsView({ item }: PantsView) {
  return (
    <Card title="Pants">
      <CardField label="Name:" text={item.name} />
      <CardField label="Color:" text={item.color} />
      <CardField label="W:" text={item.W} />
      <CardField label="L:" text={item.L} />
    </Card>
  )
}

export { PantsView }
