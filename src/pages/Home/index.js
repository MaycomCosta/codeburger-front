import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { OffersCarousel, CategoryCarousel } from '../../components'
import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
