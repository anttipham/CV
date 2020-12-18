import React, { useEffect, useState } from 'react'
import { AnttiImg, BackgroundImg, CvImg, LoadingScreen } from './animation'
import AnimateWhenActivated from '../Animation/AnimateWhenActivated'
import { animationConfig } from '../../utils/animationConfig'
import frontAntti from './front-antti.png'
import frontBg from './front-background.jpg'
import frontCv from './front-cv.png'
import styled from 'styled-components'

const TEST = 'http://shiratamaco.com/assets/images/mv-w1800-1.jpg'
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* background: url(${TEST}) center/auto 100% no-repeat; */
  display: flex;
  justify-content: center;
`

const Front = () => {
  const PICTURES_AMOUNT = 2
  const [doneLoading, setDoneLoading] = useState(0)
  const [active, setActive] = useState(false)

  const handleLoad = () => {
    console.log('1 kuva ladattu')
    setDoneLoading(doneLoading + 1)
  }

  useEffect(() => {
    // Kaikki kuvat eivät ole latautuneet
    if (doneLoading < PICTURES_AMOUNT) {
      return
    }
    // Aloita animaatio, kun kaikki kuvat ovat latautuneet
    setActive(true)
    // console.log('aktivoi')
  }, [doneLoading])

  return (
    <Container>
      <AnimateWhenActivated active={active} timeout={animationConfig.frontDuration}>
        <LoadingScreen />
        <BackgroundImg src={frontBg} onLoad={handleLoad} />
        <AnttiImg src={frontAntti} onLoad={handleLoad} />
        <CvImg src={frontCv} onLoad={handleLoad} />
      </AnimateWhenActivated>
    </Container>
  )
}

export default Front
