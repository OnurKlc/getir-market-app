import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Basket, Brands, Header, Products, Sorting, Tags } from '@components'
import { setAllProductsData } from '@store/products/productSlice'
import axios from 'axios'
import tailwindConfig from 'root/tailwind.config.js'
import styled, { ThemeProvider } from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'

const { theme } = resolveConfig(tailwindConfig)

const AppWrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding-bottom: 80px;
`

const Layout = styled.div`
  max-width: 1440px;
  display: flex;
  gap: 20px;
`

function App() {
  const dispatch = useDispatch()
  const getAllProducts = () => {
    axios.get('http://localhost:3004/items').then((resp) => {
      dispatch(setAllProductsData(resp.data))
    })
  }

  useEffect(() => {
    getAllProducts()
  }, [])

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
