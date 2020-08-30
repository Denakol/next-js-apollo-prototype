import { useGetClothesQuery } from '../../api/graphql'

import { ClothesList } from '../../components/Clothes/components'
import { Button, PageHeader } from '../../components'
import Link from 'next/link'

const Clothes = () => {
  const { data, loading } = useGetClothesQuery()

  return (
    <>
      <PageHeader text="Manage Clothes">
        <Link href="clothes/add">
          <div>
            <Button>+ Add new</Button>
          </div>
        </Link>
      </PageHeader>

      {loading ? <div>Loading ...</div> : <div>{data?.clothes && <ClothesList items={data?.clothes} />}</div>}
    </>
  )
}

export default Clothes
