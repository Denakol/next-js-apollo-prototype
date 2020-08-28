import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home ">
    <h1>Hello 👋</h1>
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
  </Layout>
)

export default IndexPage