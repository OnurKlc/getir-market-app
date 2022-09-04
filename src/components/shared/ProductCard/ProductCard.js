import { ProductImage } from './styles'

export default function ProductCard({ price, name }) {
  return (
    <div className='flex-col gap-4 w-[250px]'>
      <ProductImage className='p-4 rounded-md'>
        <div className='bg-gray w-full h-full min-h-[200px]' />
      </ProductImage>
      <div className='text-primary font-bold'>&#8378; {price}</div>
      <div>{name}</div>
      <button className='bg-primary text-white w-full rounded-md'>Add</button>
    </div>
  )
}
