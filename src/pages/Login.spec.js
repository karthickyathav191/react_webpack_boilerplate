import { render, screen } from '@testing-library/react'
import Login from './Login'

test("Loads and displays page name", async () => {
  render(<Login />)
  expect(screen).toHaveTextContent('Login Page')
})