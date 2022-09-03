import tailwindConfig from 'root/tailwind.config.js'
import { ThemeProvider } from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'

import { Header } from '@/components'

const { theme } = resolveConfig(tailwindConfig)

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  )
}

export default App
