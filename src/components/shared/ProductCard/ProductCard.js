import { useDispatch } from 'react-redux'
import { MugImg, ShirtImg } from '@assets'
import { addToBasketProducts } from '@store/products/productSlice'

import { ProductImageWrapper } from './styles'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const { price, name, itemType } = product

  const addProduct = () => {
    const tempProduct = { ...product }
    tempProduct.basketAmount = 1
    dispatch(addToBasketProducts(tempProduct))
  }

  return (
    <div className='flex flex-col gap-4 w-[200px]'>
      <ProductImageWrapper className='p-4 rounded-md'>
        <img
          src={itemType === 'mug' ? MugImg : ShirtImg}
          className='bg-gray w-full h-full min-h-[200px]'
          alt={itemType}
        />
      </ProductImageWrapper>
      <div className='text-primary font-bold'>&#8378; {price}</div>
      <div className='h-[48px]'>{name}</div>
      <button
        onClick={addProduct}
        className='bg-primary text-white w-full rounded-md py-1'
      >
        Add
      </button>
    </div>
  )
}
