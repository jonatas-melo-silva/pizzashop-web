import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Outlet } from 'react-router-dom'

import { cn } from '@/libs'

const styles = cva('')

export type AppLayoutProps = ComponentProps<'div'>

export function AppLayout({ className, ...props }: AppLayoutProps) {
  return (
    <div className={cn(styles({ className }))} {...props}>
      <header>AppLayout</header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
