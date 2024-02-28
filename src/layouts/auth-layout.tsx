import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Outlet } from 'react-router-dom'

import { cn } from '@/libs'

const styles = cva('')

export type AuthLayoutProps = ComponentProps<'div'>

export function AuthLayout({ className, ...props }: AuthLayoutProps) {
  return (
    <div className={cn(styles({ className }))} {...props}>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
