import styled from 'styled-components'

import Logo from '@/assets/Logo.svg'

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Header() {
  return (
    <Wrapper>
      <img src={Logo} alt='logo' />
    </Wrapper>
  )
}
