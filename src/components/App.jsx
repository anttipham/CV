/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { animationConfig } from '../utils/animationConfig'
import AnimateChildren from './Animation/AnimateChildren'
import AnimateWhenEnteringViewport from './Animation/AnimateWhenEnteringViewport'
import Fade from './Animation/Fade'
import Front from './Front'
import AboutMe from './textParts/AboutMe'
import ContactInformation from './textParts/ContactInformation'
import Hobbies from './textParts/Hobbies'
import Language from './textParts/Language'
import OtherSkills from './textParts/OtherSkills'
import Programming from './textParts/Programming'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 30px;
  padding-bottom: 100px;
`
const FadeWithMargin = styled(Fade)`
  margin: 100px 0;
`

const App = () => (
  <>
    <Front />
    <Container>
      <AnimateChildren
        animationEnteringComponent={AnimateWhenEnteringViewport}
        styledAnimationComponent={FadeWithMargin}
        timeout={animationConfig.fadeDuration}
      >
        <ContactInformation />
        <AboutMe />
        <Language />
        <Programming />
        <OtherSkills />
        <Hobbies />
      </AnimateChildren>
    </Container>
  </>
)

export default App
