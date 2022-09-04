import { useSelector } from 'react-redux'

import { ContainerBox, Filter } from '../shared'

export default function Brands() {
  const { brands } = useSelector((state) => state.productState)

  return (
    <ContainerBox label='Brands'>
      <Filter component='brand' data={brands} />
    </ContainerBox>
  )
}
