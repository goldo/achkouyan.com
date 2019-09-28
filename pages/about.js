import { ContainerWithAnimation } from 'components/Page'

import content from '../content/about.md'

const About = () => (
  <ContainerWithAnimation>
    <div dangerouslySetInnerHTML={{ __html: content.html }} />
  </ContainerWithAnimation>
)

export default About
