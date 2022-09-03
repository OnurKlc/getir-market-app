import styled from 'styled-components'

import { ProductCard } from './shared'

const ProductContainer = styled.div`
  flex-grow: 1;
`

export default function Products() {
  return (
    <ProductContainer>
      <p>Products</p>
      <div className='bg-white p-8'>
        <ProductCard price='14,99' title='Rustic Beach Mug' />
      </div>
    </ProductContainer>
  )
}
