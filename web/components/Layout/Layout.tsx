import React, { ReactNode } from 'react'
import { Link } from '../Link'
import Head from 'next/head'
import classes from './Layout.module.scss'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={classes.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={classes.header}>
      <div>COOLLOGO</div>

      <div>Hi Anonym User!</div>
    </header>

    <nav className={classes.sidebar}>
      <Link className={classes.sidebar_item} href="/">
        Home
      </Link>
      <Link className={classes.sidebar_item} href="/about">
        About
      </Link>
      <Link className={classes.sidebar_item} href="/clothes">
        Clothes Management
      </Link>
    </nav>

    <div className={classes.content}>{children}</div>

    <footer className={classes.footer}>
      <span>@denakol</span>
    </footer>
  </div>
)

export { Layout }
