import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerUserInfo,
  PageLink,
  Line,
  ExitPage
} from './styles'

export function Header() {
  const { logout, userData } = useUser()

  const logoutUser = () => {
    logout()
    push('/login')
  }

  const {
    push,
    location: { pathname }
  } = useHistory()
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={Cart} alt="logo do carrinho de compras" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="logo do boneco do perfil" />
        </PageLink>
        <ContainerUserInfo>
          <p>Olá, {userData.name}</p>
          <ExitPage className="exitPage" onClick={logoutUser}>
            Sair
          </ExitPage>
        </ContainerUserInfo>
      </ContainerRight>
    </Container>
  )
}
