/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { animationConfig } from '../utils/animationConfig'
import AnimateChildren from './Animation/AnimateChildren'
import AnimateWhenEnteringViewport from './Animation/AnimateWhenEnteringViewport'
import Front from './Front'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`
const Fade = styled.div`
  transition: opacity ${({ duration }) => duration}ms ease-in-out;
  opacity: ${({ entering, entered }) => entering || entered ? 1 : 0};
`

const App = () => (
  <>
    <Front />
    <Container>
      <AnimateChildren
        animationEnteringComponent={AnimateWhenEnteringViewport}
        styledAnimationComponent={Fade}
        timeout={animationConfig.fadeDuration}
      >
        {[...Array(100)].map((_, key) => <div key={key}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, iusto consequuntur ad quos similique obcaecati reprehenderit eum dolorum excepturi? Facilis cupiditate ex ipsum unde ab, ipsa labore sunt hic quaerat.</div>)}
      </AnimateChildren>
    </Container>
  </>
)

export default App
