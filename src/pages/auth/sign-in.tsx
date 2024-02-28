import { zodResolver } from '@hookform/resolvers/zod'
import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Input, Label } from '@/components/ui'
import { cn } from '@/libs'

const singInFormSchema = z.object({
  email: z.string().email(),
})

type SignInFormInput = z.infer<typeof singInFormSchema>

const styles = cva('p-8')

export type SignInProps = ComponentProps<'div'>

export function SignIn({ className, ...props }: SignInProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormInput>({
    resolver: zodResolver(singInFormSchema),
  })

  async function handleSignIn(data: SignInFormInput) {
    console.log(data)

    await new Promise((resolve) => setTimeout(resolve, 2000))
  }
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

          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col gap-4"
          >
            <fieldset>
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </fieldset>

            <Button disabled={isSubmitting} type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
