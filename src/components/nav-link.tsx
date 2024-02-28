import { cva } from 'class-variance-authority'
import { Link, LinkProps, useLocation } from 'react-router-dom'

import { cn } from '@/libs'

const styles = cva(
  'flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 data-[current=true]:text-foreground',
)

export type NavLinkProps = LinkProps & {
  className?: string
}

export function NavLink({ className, ...props }: NavLinkProps) {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      className={cn(styles({ className }))}
      {...props}
    />
  )
}
