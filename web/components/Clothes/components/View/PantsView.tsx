import { Pants } from '../../../../api/graphql'
import { CardField } from '../../../Library'

interface PantsView {
  item: Pants
}
function PantsView({ item }: PantsView) {
  return (
    <>
      <CardField label="Name:" text={item.name} />
      <CardField label="Color:" text={item.color} />
      <CardField label="W:" text={item.W} />
      <CardField label="L:" text={item.L} />
    </>
  )
}

export { PantsView }
