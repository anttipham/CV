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
import Education from './textParts/Education'
import Hobbies from './textParts/Hobbies'
import Introduction from './textParts/Introduction'
import Language from './textParts/Language'
import OtherSkills from './textParts/OtherSkills'
import Programming from './textParts/Programming'
import WorkExperience from './textParts/WorkExperience'

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 30px;
  padding-bottom: 100px;
`
const FadeWithMargin = styled(Fade)`
  margin: 20% 0;
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
        <Introduction />
        <ContactInformation />
        <AboutMe />
        <WorkExperience />
        <Education />
        <Language />
        <Programming />
        <OtherSkills />
        <Hobbies />
      </AnimateChildren>
    </Container>
  </>
)

export default App
