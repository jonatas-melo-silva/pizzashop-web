import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from '@/components'
import { router } from '@/routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet defaultTitle="pizza.shop" titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
