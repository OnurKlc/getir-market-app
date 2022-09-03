import styled from 'styled-components'

const Box = styled.div`
  min-height: 274px;
  min-width: 290px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`

export default function ContainerBox({ children, label }) {
  return (
    <Box>
      <p>{label}</p>
      <div className='bg-white p-8 flex-1'>{children}</div>
    </Box>
  )
}
