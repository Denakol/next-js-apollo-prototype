import { useGetClothesQuery } from '../../api/graphql'
import { Button, PageHeader, ClothesList } from '../../components'
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

      {loading ? (
        <span>Loading ...</span>
      ) : (
        <div>{data?.clothes && <ClothesList items={data?.clothes} />}</div>
      )}
    </>
  )
}

export default Clothes
