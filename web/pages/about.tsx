import Link from 'next/link'
import { PageHeader } from '../components/Layout'

const AboutPage = () => (
  <>
    <PageHeader text="About" />
    <p>It is prototype for quick boostrapping</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
)

export default AboutPage
