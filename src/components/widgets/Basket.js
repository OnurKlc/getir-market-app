import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseBasketAmount,
  increaseBasketAmount
} from '@store/products/productSlice'
import styled from 'styled-components'

import { ContainerBox } from '../shared'

const ProductAmount = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`

const ProductListItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 1.5rem 0;
  justify-content: space-between;

  &:first-of-type {
    padding-top: 0;
  }
`

const TotalPrice = styled.div`
  height: 50px;
  width: 92px;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  margin-left: auto;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Basket() {
  const dispatch = useDispatch()
  const { basketProducts, totalPrice } = useSelector(
    (state) => state.productState
  )

  const decreaseAmount = (addedKey) => {
    dispatch(decreaseBasketAmount(addedKey))
  }

  const increaseAmount = (addedKey) => {
    dispatch(increaseBasketAmount(addedKey))
  }

  if (!basketProducts.length) return null

  return (
    <ContainerBox className='border-primary border-8 mt-8 h-fit self-end md:self-start'>
      {basketProducts.map(({ added, name, price, basketAmount }) => (
        <ProductListItem key={added}>
          <div>
            <p>{name}</p>
            <p className='text-primary'>&#8378; {price}</p>
          </div>
          <ProductAmount>
            <button onClick={() => decreaseAmount(added)}>-</button>
            <span className='text-white bg-primary h-[32px] w-[32px] flex items-center justify-center'>
              {basketAmount}
            </span>
            <button onClick={() => increaseAmount(added)}>+</button>
          </ProductAmount>
        </ProductListItem>
      ))}
      <TotalPrice>&#8378; {totalPrice}</TotalPrice>
    </ContainerBox>
  )
}
