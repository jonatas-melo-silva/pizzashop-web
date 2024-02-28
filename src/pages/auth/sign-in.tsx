import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Helmet } from 'react-helmet-async'

import { cn } from '@/libs'

const styles = cva('')

export type SignInProps = ComponentProps<'div'>

export function SignIn({ className, ...props }: SignInProps) {
  return (
    <>
      <Helmet title="Login" />
      <div className={cn(styles({ className }))} {...props}>
        SignIn
      </div>
    </>
  )
}
