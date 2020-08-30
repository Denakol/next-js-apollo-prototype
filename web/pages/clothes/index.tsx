import { useGetClothesQuery } from '../../api/graphql'

import { ClothesList } from './components'
import { Button, Layout, PageHeader } from '../../components'
import Link from 'next/link'

const Clothes = () => {
  const { data, loading } = useGetClothesQuery()

  if (loading) {
    return <div>loading</div>
  }
  return (
    <Layout>
      <PageHeader text="Manage Clothes">
        <Link href="clothes/add">
          <div>
            <Button>+ Add new</Button>
          </div>
        </Link>
      </PageHeader>
      {data?.clothes && <ClothesList items={data?.clothes} />}
    </Layout>
  )
}

export default Clothes
