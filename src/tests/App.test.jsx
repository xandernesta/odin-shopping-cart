import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, getByText} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App', () => { 
  it('render headline',() => { 
    render(<App />);

    //check if App component renders headline
    expect(screen.getByRole("heading").textContent).toMatch(/shop/i);
  })

  it('Click the button', async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Shop" })

    await user.click(button)

    expect(screen.getByText('shop 1', {exact: false}));

  })
 })