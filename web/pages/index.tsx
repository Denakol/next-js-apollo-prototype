import Link from 'next/link'
import { PageHeader } from '../components/Layout'

const IndexPage = () => (
  <>
    <PageHeader text="Home Page" />
    <p>
      <Link href="/clothes">
        <a>Clothes Management</a>
      </Link>
    </p>
    <p>
      <Link href="/about">
        <a>About project</a>
      </Link>
    </p>
  </>
)

export default IndexPage
