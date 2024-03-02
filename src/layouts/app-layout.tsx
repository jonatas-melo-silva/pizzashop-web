import { isAxiosError } from 'axios'
import { cva } from 'class-variance-authority'
import { ComponentProps, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from '@/components'
import { api, cn } from '@/libs'

const styles = cva('flex nim max-h-screen flex-col antialiased')

export type AppLayoutProps = ComponentProps<'div'>

export function AppLayout({ className, ...props }: AppLayoutProps) {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', { replace: true })
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <div className={cn(styles({ className }))} {...props}>
      <Header />

      <main className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </main>
    </div>
  )
}
