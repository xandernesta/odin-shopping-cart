import {
  render,
  screen,
  container,
  fireEvent,
  getByText,
  getByTestId
} from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { Header } from '../components/Header/Header.jsx'
import { NavBar } from '../components/NavBar/NavBar.jsx'

describe('NavBar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar></NavBar>
      </MemoryRouter>
    )
  })

  it('renders correctly', () => {
    expect(screen.getByRole('link', { name: 'Products' })).toBeInTheDocument()
  })

  it('has home and product links to their respective pages', () => {
    const homeLink = screen.getByRole('link', { name: /^home$/i })
    const storeLink = screen.getByRole('link', { name: /products/i })
    expect(homeLink).toHaveAttribute('href', '/')
    expect(storeLink).toHaveAttribute('href', '/products')
  })
})
