import * as React from 'react'
import { Link } from '@reach/router'

interface IRouterNavLinkProps {
  to: string
  className?: string
  activeClassName?: string
  children: any
}

const RouterNavLink: React.SFC<IRouterNavLinkProps> = (props) => {
  return (
    <Link
      to={props.to}
      className={props.className}
      getProps={({ isCurrent }: { isCurrent: boolean }) => {
        return { className: isCurrent ? `${props.className} ${props.activeClassName}` : props.className }
      }}
    >{props.children}</Link>
  )
}

export default RouterNavLink
