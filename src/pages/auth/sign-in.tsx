import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

import { cn } from '@/libs'

const styles = cva('')

export type SignInProps = ComponentProps<'div'>

export function SignIn({ className, ...props }: SignInProps) {
  return (
    <div className={cn(styles({ className }))} {...props}>
      SignIn
    </div>
  )
}
