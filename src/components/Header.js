import { useSelector } from 'react-redux'
import { BasketIcon, Logo } from '@assets'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Basket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 120px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryDark};
`

export default function Header() {
  const { totalPrice } = useSelector((state) => state.productState)

  return (
    <Wrapper>
      <img src={Logo} alt='logo' className='ml-auto' />
      <Basket>
        <img src={BasketIcon} alt='basket' />
        <span className='text-white ml-2'>&#8378; {totalPrice}</span>
      </Basket>
    </Wrapper>
  )
}
