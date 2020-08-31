import Link from 'next/link'
import { PageHeader } from '../components/Library/Layout'
import { Card } from '../components'

const AboutPage = () => (
  <>
    <PageHeader text="About" />
    <Card>
      <p>It is prototype for quick boostrapping</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Card>
  </>
)

export default AboutPage
