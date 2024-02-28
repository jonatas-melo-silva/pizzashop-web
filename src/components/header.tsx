import { cva } from 'class-variance-authority'
import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { ComponentProps } from 'react'

import { cn } from '@/libs'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme'
import { Separator } from './ui'

const styles = cva('border-b')

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={cn(styles({ className }))} {...props}>
      <section className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </section>
    </header>
  )
}
