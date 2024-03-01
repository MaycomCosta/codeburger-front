import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'
import Proptypes from 'prop-types'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menuList'
import { Container, ItemContainer, ListLinks } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()

  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLinks to={item.link}>{item.label}</ListLinks>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLinks to={'/login'} onClick={logout}>
          Sair
        </ListLinks>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: Proptypes.string
}
