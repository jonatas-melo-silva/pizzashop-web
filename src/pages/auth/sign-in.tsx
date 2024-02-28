import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Helmet } from 'react-helmet-async'

import { Button, Input, Label } from '@/components/ui'
import { cn } from '@/libs'

const styles = cva('p-8')

export type SignInProps = ComponentProps<'div'>

export function SignIn({ className, ...props }: SignInProps) {
  return (
    <>
      <Helmet title="Login" />
      <div className={cn(styles({ className }))} {...props}>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <section className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </section>

          <form className="flex flex-col gap-4">
            <fieldset>
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" />
            </fieldset>

            <Button type="submit">Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}
