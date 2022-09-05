import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Basket, Brands, Header, Products, Sorting, Tags } from '@components'
import { setAllProductsData } from '@store/products'
import axios from 'axios'
import tailwindConfig from 'root/tailwind.config.js'
import styled, { css, ThemeProvider } from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'

const { theme } = resolveConfig(tailwindConfig)

const AppWrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding-bottom: 80px;
`

const Layout = styled.div`
  max-width: 1440px;
  display: flex;
  gap: 20px;
`

const Sidebar = styled.div`
  transition: left 0.2s;

  @media (max-width: 968px) {
    width: 300px;
    position: fixed;
    top: 75px;
    left: 0;
    bottom: 0;
    background-color: ${({ theme: { colors } }) => colors.bgColor};
    box-shadow: 10px 0px 30px -15px rgba(0, 0, 0, 0.75);
    z-index: 10;

    ${({ collapsed }) =>
      collapsed &&
      css`
        left: -300px;
        box-shadow: unset;
      `}
  }
`

const SidebarTrigger = styled.button`
  position: absolute;
  top: 200px;
  right: -40px;
  width: 40px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.2s;

  ${({ collapsed }) =>
    collapsed &&
    css`
      transform: scaleX(-1);
    `};

  @media (min-width: 968px) {
    display: none;
  }
`

const Mask = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 75px;
  bottom: 0;
  right: 0;
  left: 0;
  display: ${({ show }) => show && 'block'};
`

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
