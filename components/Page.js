import styled, { css } from 'styled-components'

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

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  flex: 1;
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;
`
