import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Basket, Brands, Header, Products, Sorting, Tags } from 'components'
import { setAllProductsData } from 'store/products'
import { ThemeProvider } from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'

import { AppWrapper, Layout, Mask, Sidebar, SidebarTrigger } from './AppStyles'

const { theme } = resolveConfig({
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#1EA4CE',
        primaryDark: '#147594',
        primaryLight: '#F2F0FD',
        bgColor: '#FAFAFA',
        gray: '#C4C4C4',
        lightGray: '#F4F4F4'
      }
    }
  },
  plugins: []
})

function App() {
  const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(true)

  const getAllProducts = () => {
    axios.get('http://localhost:3004/items').then((resp) => {
      dispatch(setAllProductsData(resp.data))
    })
  }

  useEffect(() => {
    if (collapsed) document.documentElement.style.overflow = 'auto'
    if (!collapsed) document.documentElement.style.overflow = 'hidden'
  }, [collapsed])

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <Layout className='m-4 md:m-8 lg:m-12 flex flex-col-reverse md:flex-row pt-[75px]'>
          <Sidebar {...{ collapsed }}>
            <div className='overflow-auto h-full'>
              <Sorting />
              <Brands />
              <Tags />
              <SidebarTrigger
                onClick={() => setCollapsed(!collapsed)}
                {...{ collapsed }}
              >
                &lt;
              </SidebarTrigger>
            </div>
          </Sidebar>
          <Mask show={!collapsed} />
          <Products />
          <Basket />
        </Layout>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
