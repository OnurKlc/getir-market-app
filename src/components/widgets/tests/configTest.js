import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import tailwindConfig from 'root/tailwind.config.js'
import { store } from 'store/store'
import { ThemeProvider } from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'

const { theme } = resolveConfig(tailwindConfig)

afterAll(() => jest.clearAllMocks())

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/jest-dom'
export * from '@testing-library/react'

export { customRender as render }
