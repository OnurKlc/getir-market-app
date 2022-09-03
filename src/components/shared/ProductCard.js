import styled from 'styled-components'

const ProductImage = styled.div`
  border: 1px solid #f3f0fe;
`

export default function ProductCard({ price, title }) {
  return (
    <div className='flex-col gap-4'>
      <ProductImage className='p-4 rounded-md'>
        <img src='' alt='' className='bg-gray w-full h-full' />
      </ProductImage>
      <div className='text-primary font-bold'>&#8378; {price}</div>
      <div>{title}</div>
      <button className='bg-primary text-white w-full rounded-md'>Add</button>
    </div>
  )
}
