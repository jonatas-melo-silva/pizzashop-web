import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('OrderStatus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderStatus status="pending" />)
    expect(baseElement).toBeTruthy()
  })
})
