import { useSelector } from 'react-redux'

import { ContainerBox, Filter } from '../shared'

export default function Tags() {
  const { tags } = useSelector((state) => state.productState)

  return (
    <ContainerBox label='Tags'>
      <Filter component='tag' data={tags} />
    </ContainerBox>
  )
}
