import Link from 'next/link'
import styled from 'styled-components'

import { Container } from 'components/Page'
import { SIZE_4, SIZE_3, SIZE_2, SIZE_1 } from 'config'

const Navigation = styled.nav`
  height: 6rem;
  width: 100%;
`

const NavigationTitle = styled.a`
  display: inline;
  font-size: 1.8rem;
  text-transform: uppercase;
  line-height: 6rem;
  letter-spacing: 0.1rem;

  @media (max-width: ${SIZE_4}px) {
    font-size: 1.6rem;
  }

  @media (max-width: ${SIZE_3}px) {
    font-size: 1.5rem;
  }

  @media (max-width: ${SIZE_2}px) {
    font-size: 1.5rem;
  }

  @media (max-width: ${SIZE_1}px) {
    font-size: 1.3rem;
  }
`

const NavigationList = styled.ul`
  float: right;
  list-style: none;
  margin-bottom: 0;
  margin-top: 0;
  padding: 0;
`

const NavigationItem = styled.li`
  float: left;
  margin: 0;
  position: relative;
`

const NavigationLink = styled.a`
  margin-left: 1rem;
  margin-right: 1rem;
  display: inline;
  font-size: 1.6rem;
  text-transform: uppercase;
  line-height: 6rem;
  letter-spacing: 0.1rem;
  @media (max-width: ${SIZE_2}px) {
    font-size: 1.5rem;
  }

  @media (max-width: ${SIZE_1}px) {
    font-size: 1.3rem;
  }
`

const Header = () => (
  <Navigation>
    <Container>
      <Link prefetch href="/">
        <NavigationTitle>Franck Achkouyan</NavigationTitle>
      </Link>
      <NavigationList>
        <NavigationItem>
          <Link prefetch href="/about">
            <NavigationLink>About</NavigationLink>
          </Link>
        </NavigationItem>
      </NavigationList>
    </Container>
  </Navigation>
)

export default Header
