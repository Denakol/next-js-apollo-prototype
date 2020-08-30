import React, { ReactNode } from 'react'
import { NavLink } from './NavLink'
import Head from 'next/head'
import classes from './Layout.module.scss'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children }: Props) => (
  <div className={classes.layout}>
    <Head>
      <title>Next Js App</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={classes.header}>
      <div>COOLLOGO</div>

      <div>Hi Anonym User!</div>
    </header>

    <nav className={classes.sidebar}>
      <NavLink className={classes.sidebar_item} href="/">
        Home
      </NavLink>
      <NavLink className={classes.sidebar_item} href="/about">
        About
      </NavLink>
      <NavLink className={classes.sidebar_item} href="/clothes">
        Clothes Management
      </NavLink>
    </nav>

    <div className={classes.content}>{children}</div>

    <footer className={classes.footer}>
      <span>@denakol</span>
    </footer>
  </div>
)

export { Layout }
