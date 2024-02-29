import { api } from '@/libs'

export async function signOut() {
  await api.post('/sign-out')
}
