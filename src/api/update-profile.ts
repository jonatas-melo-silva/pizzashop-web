import { api } from '@/libs'

export interface UpdateProfileBody {
  name: string
  description: string | null
}

export async function updateProfile({ description, name }: UpdateProfileBody) {
  await api.put('/profile', { name, description })
}
