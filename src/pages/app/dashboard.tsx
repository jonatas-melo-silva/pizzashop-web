import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

import { cn } from '@/libs'

const styles = cva('')

export type DashboardProps = ComponentProps<'div'>

export function Dashboard({ className, ...props }: DashboardProps) {
  return (
    <div className={cn(styles({ className }))} {...props}>
      Dashboard
    </div>
  )
}
