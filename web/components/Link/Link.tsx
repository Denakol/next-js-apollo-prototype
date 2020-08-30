import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React, { useMemo } from 'react'
import classes from './link.module.scss'
import { useRouter } from 'next/router'

interface LinkProps extends React.PropsWithChildren<NextLinkProps> {
  className: string
}

function Link({ children, className, href, ...props }: LinkProps) {
  const router = useRouter()

  const active = useMemo(
    () =>
      router.pathname === href || (router.pathname.includes(href.toString()) && href !== '/')
        ? classes.activeLink
        : '',
    [router.pathname, href],
  )

  return (
    <NextLink href={href} {...props}>
      <a className={`${classes.link} ${className} ${active}`}>{children}</a>
    </NextLink>
  )
}

export { Link }
