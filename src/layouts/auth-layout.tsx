import { cva } from 'class-variance-authority'
import { Pizza } from 'lucide-react'
import { ComponentProps } from 'react'
import { Outlet } from 'react-router-dom'

import { cn } from '@/libs'

const styles = cva('min-h-screen grid grid-cols-2 antialiased')

export type AuthLayoutProps = ComponentProps<'div'>

export function AuthLayout({ className, ...props }: AuthLayoutProps) {
  return (
    <div className={cn(styles({ className }))} {...props}>
      <aside className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <section className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">pizza.shop</span>
        </section>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </aside>

      <main className="relative flex flex-col items-center justify-center">
        <Outlet />
      </main>
    </div>
  )
}
