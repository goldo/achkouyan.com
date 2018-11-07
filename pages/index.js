import styled from 'styled-components'

import { SIZE_4, SIZE_3, SIZE_2, SIZE_1 } from 'config'
import { Main, Content, ContainerWithAnimation } from 'components/Page'
import Header from 'components/Header'
import Footer from 'components/Footer'

const About = styled.div`
  text-align: center;
`

const H1 = styled.h1`
  font-size: 3.1rem;
  line-height: 3.2rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  @media (max-width: ${SIZE_4}px) {
    font-size: 2.9rem;
  }
  @media (max-width: ${SIZE_3}px) {
    font-size: 2.7rem;
  }
  @media (max-width: ${SIZE_2}px) {
    font-size: 2.4rem;
  }
`

const H2 = styled.h2`
  font-size: 2rem;
  line-height: 2.8rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  @media (max-width: ${SIZE_4}px) {
    font-size: 1.7rem;
  }
  @media (max-width: ${SIZE_3}px) {
    font-size: 1.5rem;
  }
  @media (max-width: ${SIZE_2}px) {
    font-size: 1.4rem;
  }
  @media (max-width: ${SIZE_1}px) {
    font-size: 1.3rem;
  }
`

const Socials = styled.ul`
  list-style: none;
  margin: 3rem 0 1rem 0;
  padding: 0;
`

const Social = styled.li`
  display: inline;
  position: relative;
`

const SocialLink = styled.a`
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.6rem;
  font-weight: 400;

  @media (max-width: ${SIZE_4}px) {
    font-size: 1.5rem;
  }
  @media (max-width: ${SIZE_3}px) {
    font-size: 1.4rem;
  }
  @media (max-width: ${SIZE_2}px) {
    font-size: 1.3rem;
  }

  @media (max-width: ${SIZE_1}px) {
    font-size: 1.2rem;
  }
`

const SocialElement = ({ url, name }) => (
  <Social>
    <SocialLink target="_blank" rel="noopener" href={url}>
      {name}
    </SocialLink>
  </Social>
)

const Index = () => (
  <Main>
    <Header />
    <Content>
      <ContainerWithAnimation centered>
        <About>
          <H1>Franck Achkouyan 👨‍💻</H1>
          <H2>Remote 🌍 Fullstack JS Developer </H2>
          <Socials>
            <SocialElement name="github" url="https://github.com/goldo/" />
            <SocialElement name="twitter" url="https://twitter.com/a_franck/" />
            <SocialElement name="medium" url="https://medium.com/@a_franck/" />
            <SocialElement
              name="linkedin"
              url="https://www.linkedin.com/in/franckachkouyan/"
            />
          </Socials>
        </About>
      </ContainerWithAnimation>
    </Content>

    <Footer />
  </Main>
)

export default Index
