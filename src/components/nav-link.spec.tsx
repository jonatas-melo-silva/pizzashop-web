import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link whe is the current para link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sign-in">Login</NavLink>
      </>,
      {
        wrapper: ({ children }) => (
          <MemoryRouter initialEntries={['/sign-in']}>{children}</MemoryRouter>
        ),
      },
    )

    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    expect(wrapper.getByText('Login').dataset.current).toEqual('true')
  })
})
