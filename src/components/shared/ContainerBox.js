import styled from 'styled-components'

import If from './If'

const Box = styled.div`
  min-height: 274px;
  min-width: 290px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`

export default function ContainerBox({ children, label, className }) {
  return (
    <Box {...{ className }}>
      <If condition={label}>
        <p className='font-light mb-4 mt-8'>{label}</p>
      </If>
      <div className='bg-white p-8 flex-1'>{children}</div>
    </Box>
  )
}
