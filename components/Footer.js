import styled from 'styled-components'
import { Container } from 'components/Page'
import { SIZE_4, SIZE_3, SIZE_2, SIZE_1 } from 'config'

const FooterWrapper = styled.div`
  font-size: 1.6rem;
  height: 6rem;
  width: 100%;
  text-align: center;
  line-height: 6rem;
  @media (max-width: ${SIZE_4}px) {
    font-size: 1.3rem;
  }
  @media (max-width: ${SIZE_3}px) {
    font-size: 1.1rem;
  }
  @media (max-width: ${SIZE_2}px) {
    font-size: 1rem;
  }
`

const Footer = () => (
  <FooterWrapper>
    <Container>Powered by Next.js · Hosted by ▲ Zeit.co </Container>
  </FooterWrapper>
)

export default Footer
