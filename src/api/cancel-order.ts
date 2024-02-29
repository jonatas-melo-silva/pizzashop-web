import { api } from '@/libs'

export interface CancelOrderParams {
  readonly orderId: string
}

export async function cancelOrder({ orderId }: CancelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
