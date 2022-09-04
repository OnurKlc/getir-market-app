import styled from 'styled-components'

const SearchArea = styled.input`
  padding: 1rem;
  border: 2px solid ${({ theme: { colors } }) => colors.gray};
`

export default function Filter({ component }) {
  return (
    <div>
      <SearchArea placeholder={`Search ${component}`} />
    </div>
  )
}
