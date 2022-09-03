import tailwindConfig from 'root/tailwind.config.js'
import styled, { ThemeProvider } from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'

import { Basket, Brands, Header, Products, Sorting, Tags } from '@/components'

const { theme } = resolveConfig(tailwindConfig)

const AppWrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgColor};
`

const Layout = styled.div`
  max-width: 1440px;
  display: flex;
  gap: 20px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <Layout className='m-6 md:m-8 lg:m-12'>
          <div>
            <Sorting />
            <Brands />
            <Tags />
          </div>
          <Products />
          <Basket />
        </Layout>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
