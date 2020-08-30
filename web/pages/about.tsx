import Link from 'next/link'
import { Layout } from '../components/'

const AboutPage = () => (
  <Layout title="About">
    <h1>About</h1>
    <p>It is prototype for quick boostrapping</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
