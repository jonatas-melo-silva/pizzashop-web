import { cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Link, useRouteError } from 'react-router-dom'

import { cn } from '@/libs'

const styles = cva('flex h-screen flex-col items-center justify-center gap-2')

export type ErrorPageProps = ComponentProps<'div'>

export function ErrorPage({ className, ...props }: ErrorPageProps) {
  const error = useRouteError() as Error

  return (
    <div className={cn(styles({ className }))} {...props}>
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
