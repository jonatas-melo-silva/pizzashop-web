import { createBrowserRouter } from 'react-router-dom'

import { AppLayout, AuthLayout } from '@/layouts'
import { Dashboard, SignIn } from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
])
