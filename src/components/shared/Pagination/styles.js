import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`

export const Prev = styled.button`
  display: flex;

  &:hover:not[disabled] {
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
  flex-grow: 1;
  height: 100px;
  overflow: scroll;
  text-overflow: ellipsis;
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

export const Next = styled.button`
  display: flex;

  img {
    margin-left: 10px;
  }

  &:hover:not[disabled] {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`
