import { useSelector } from 'react-redux'
import { BasketIcon, Logo } from 'assets'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
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
  position: absolute;
  top: 0;
  bottom: 0;
`

export default function Header() {
  const { totalPrice } = useSelector((state) => state.productState)

  return (
    <Wrapper className='sm:justify-center max-w-full'>
      <img src={Logo} alt='logo' className='w-20 sm:w-[142px] ml-4 sm:ml-0' />
      <Basket className='right-0 md:right-8 lg:right-12'>
        <img src={BasketIcon} alt='basket' />
        <span className='text-white ml-2'>&#8378; {totalPrice}</span>
      </Basket>
    </Wrapper>
  )
}
