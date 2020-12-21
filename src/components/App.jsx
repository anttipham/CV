/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { animationConfig } from '../utils/animationConfig'
import AnimateChildren from './Animation/AnimateChildren'
import AnimateWhenEnteringViewport from './Animation/AnimateWhenEnteringViewport'
import { baseUnit, insertDuration } from './Animation/animationUtils'
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
  padding-bottom: 500px;
`
const Fade = styled.div`
  transition: opacity ${insertDuration(7*baseUnit)}ms ease-in-out ${insertDuration(3*baseUnit)}ms;
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
