import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Helmet } from 'react-helmet-async'

import { cn } from '@/libs'

const styles = cva('')

export type DashboardProps = ComponentProps<'div'>

export function Dashboard({ className, ...props }: DashboardProps) {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className={cn(styles({ className }))} {...props}>
        Dashboard
      </div>
    </>
  )
}
