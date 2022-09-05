import styled, { css } from 'styled-components'

export const AppWrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding-bottom: 80px;
`

export const Layout = styled.div`
  max-width: 1440px;
  display: flex;
  gap: 20px;
`

export const Sidebar = styled.div`
  transition: left 0.2s;

  @media (max-width: 968px) {
    width: 300px;
    position: fixed;
    top: 75px;
    left: 0;
    bottom: 0;
    background-color: ${({ theme: { colors } }) => colors.bgColor};
    box-shadow: 10px 0px 30px -15px rgba(0, 0, 0, 0.75);
    z-index: 10;

    ${({ collapsed }) =>
      collapsed &&
      css`
        left: -300px;
        box-shadow: unset;
      `}
  }
`

export const SidebarTrigger = styled.button`
  position: absolute;
  top: 200px;
  right: -40px;
  width: 40px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.2s;

  ${({ collapsed }) =>
    collapsed &&
    css`
      transform: scaleX(-1);
    `};

  @media (min-width: 968px) {
    display: none;
  }
`

export const Mask = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 75px;
  bottom: 0;
  right: 0;
  left: 0;
  display: ${({ show }) => show && 'block'};
`
