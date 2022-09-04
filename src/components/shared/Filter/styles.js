import styled from 'styled-components'

export const SearchArea = styled.input`
  padding: 1rem;
  border: 2px solid ${({ theme: { colors } }) => colors.gray};
`

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  max-height: 150px;
  overflow: auto;
`

export const Checkbox = styled.input`
  margin-right: 1rem;
`

export const Label = styled.label`
  color: black;
`
