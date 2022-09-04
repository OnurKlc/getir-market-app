import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
`

export const Prev = styled.div`
  display: flex;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }

  img {
    margin-right: 10px;
    transform: scale(-1);
  }
`

export const Numbers = styled.div`
  display: inline-flex;
  align-items: center;
  width: 300px;
  height: 100px;
  white-space: nowrap;
  overflow: scroll;
`

export const Number = styled.span`
  display: inline-block;
  margin: 0 5px;
  padding: 5px 8px;
  border-radius: 2px;

  &:hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.primary};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: white !important;
    `}
`

export const Next = styled.div`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 10px;
  }

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`
