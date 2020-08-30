import Link from 'next/link'

const IndexPage = () => (
  <>
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
  </>
)

export default IndexPage
