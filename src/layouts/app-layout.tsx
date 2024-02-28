import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components'
import { cn } from '@/libs'

const styles = cva('flex nim max-h-screen flex-col antialiased')

export type AppLayoutProps = ComponentProps<'div'>

export function AppLayout({ className, ...props }: AppLayoutProps) {
  return (
    <div className={cn(styles({ className }))} {...props}>
      <Header />

      <main className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </main>
    </div>
  )
}
