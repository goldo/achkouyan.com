import { Main, Content, ContainerWithAnimation } from 'components/Page'
import Header from 'components/Header'
import Footer from 'components/Footer'

const About = () => (
  <Main>
    <Header />
    <Content>
      <ContainerWithAnimation>
        <p>
          I'm a remote 🌍 freelance JS developer 👨‍💻 specialized in Node, React &
          GraphQL
        </p>
        <p>
          Currently based in Paris 🇫🇷 working{' '}
          <a
            href="https://twitter.com/LeMondeFR"
            target="_blank"
            rel="noopener"
          >
            @LeMondeFR 📰
          </a>{' '}
        </p>
        <p>
          Previously, I co-founded{' '}
          <a
            href="https://twitter.com/bloomeefr"
            target="_blank"
            rel="noopener"
          >
            @BloomeeFr 📱
          </a>{' '}
          (crowd-sourced quiz on mobile native & web) and{' '}
          <a
            href="https://twitter.com/gamifictv"
            target="_blank"
            rel="noopener"
          >
            @GamificTV 📺
          </a>{' '}
          (play on your mobile, audio-synchronized with your TV)
        </p>

        <p>I love travelling ✈️ video gaming 🎮 and playing football ⚽️</p>
        <p>
          Feel free to ping me{' '}
          <a href="https://twitter.com/a_franck" target="_blank" rel="noopener">
            @a_franck ✌
          </a>
        </p>
      </ContainerWithAnimation>
    </Content>
    <Footer />
  </Main>
)

export default About
