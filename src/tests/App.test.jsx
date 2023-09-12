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
import { App } from '../App.jsx'
import { Products } from '../components/Products/Products.jsx'

describe('App', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </MemoryRouter>
    )
  })
  it('render headline', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </MemoryRouter>
    )

    //check if App component renders headline
    expect(screen.getByRole('heading').textContent).toMatch(/Dream Computers/i)
  })
  it('renders background image', async () => {
   await render(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('appbg')).toBeInTheDocument()
  })

  it('renders a button link to products', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByRole('link', { name: /shop now/i })).toBeInTheDocument()
  })

  it('allows user to Click the button to move to products page which has a link to Home', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </MemoryRouter>
    )
    const button = screen.getByRole('link', { name: 'Shop Now' })

    await user.click(button)

    await expect(
      screen.getByRole('link', { name: /home/i })
    ).toBeInTheDocument()
  })
})
