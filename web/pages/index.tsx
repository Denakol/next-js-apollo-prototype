import Link from 'next/link'
import { PageHeader } from '../components/Library/Layout'
import { Card } from '../components'

const IndexPage = () => (
  <>
    <PageHeader text="Home Page" />
    <Card>
      <div>Hello! It is simple prototype.</div>
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
    </Card>
  </>
)

export default IndexPage
