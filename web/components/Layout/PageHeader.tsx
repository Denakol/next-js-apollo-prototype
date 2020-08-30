import React from 'react'
import classes from './PageHeader.module.scss'

interface PageHeaderProps {
  text: string
}

function PageHeader({ text, children }: React.PropsWithChildren<PageHeaderProps>) {
  return (
    <div className={classes.pageHeader}>
      <div className={classes.textBlock}>{text}</div>
      <div>{children}</div>
    </div>
  )
}

export { PageHeader }
