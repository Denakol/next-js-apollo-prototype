import { useGetClothesQuery } from '../../api/graphql'
import Link from 'next/link'

const Clothes = () => {
  const { data, loading } = useGetClothesQuery()

  if (loading) {
    return <div>loading</div>
  }
  return (
    <>
      <div>
        {data?.clothes?.map(item => (
          <span key={item?.id}>{item?.name}</span>
        ))}
      </div>
      <Link href="clothes/add">
        <a>Add new</a>
      </Link>
    </>
  )
}

export default Clothes
