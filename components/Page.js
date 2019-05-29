import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import posed from 'react-pose'
import Router from 'next/router'
import * as gtag from '../libs/gtag'

const AnimatedBox = posed.section({
  enter: { opacity: 1, delay: 300, y: '-20px' },
  exit: { opacity: 0 },
})

export const Container = styled.section`
  margin: 0 auto;
  max-width: 120rem;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;

  ${props =>
    props.centered &&
    css`
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    `};
`

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export class ContainerWithAnimation extends Component {
  constructor(props) {
    super(props)
    this.state = { isDisplayed: false }
  }

  componentDidMount() {
    this.toggleDisplay()
  }

  componentWillUnmount() {
    this.toggleDisplay()
  }

  toggleDisplay = () => this.setState({ isDisplayed: !this.state.isDisplayed })

  render() {
    return (
      <Container {...this.props}>
        <AnimatedBox
          style={{ opacity: 0 }}
          pose={this.state.isDisplayed ? 'enter' : 'exit'}
        >
          {this.props.children}
        </AnimatedBox>
      </Container>
    )
  }
}

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;
`
