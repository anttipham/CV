import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import AnimateWhenActivated from './AnimateWhenActivated'

const VIEWPORT_MARGIN = window.innerHeight / 20
// const VIEWPORT_MARGIN = 0

const AnimateWhenEnteringViewport = ({ active: forceActive = false, timeout, children, styledAnimationComponent: StyledAnimationComponent }) => {
  const [active, setActive] = useState(false)
  const ref = useRef()

  const handleScroll = () => {
    /**
     * Laskee, onko elementti näkyvillä näytöllä.
     * @param {Object} elementRectangle Elementin paikkojen tiedot.
     */
    const inViewPort = ({ top, bottom }) => {
      // Paikkakoordinaateissa (0, 0) on näytön vasen yläkulma ja
      // oikean alakulman koordinaatit ovat (window.innerWidth, window.innerHeight)
      const notAboveViewport = 0 + VIEWPORT_MARGIN <= top
      const notBelowViewport = bottom <= window.innerHeight - VIEWPORT_MARGIN

      // Jos elementti ei ole näytön yllä tai alla, elementin täytyy olla keskellä näyttöä.
      // Jos elementti on sekä näytön yllä että alla, elementin täytyy olla näytön yllä, keskellä ja alla.
      return notBelowViewport === notAboveViewport
    }

    const elementRectangle = ref.current.getBoundingClientRect()
    // console.log(1, window.innerHeight)
    // console.log(2, elementRectangle)
    if (inViewPort(elementRectangle)) {
      setActive(true)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <AnimateWhenActivated
      active={active || forceActive}
      timeout={timeout}
    >
      <StyledAnimationComponent ref={ref}>
        {children}
      </StyledAnimationComponent>
    </AnimateWhenActivated>
    // <Transition in={active} timeout={timeout}>
    //   {(state) => (
    //     <StyledAnimationComponent ref={ref} {...{ [state]: true }} duration={timeout}>
    //       {children}
    //     </StyledAnimationComponent>
    //   )}
    // </Transition>
  )
}

AnimateWhenEnteringViewport.propTypes = {
  active: PropTypes.bool,
  timeout: PropTypes.number.isRequired,
  styledAnimationComponent: PropTypes.elementType,
  children: PropTypes.element.isRequired
}

export default AnimateWhenEnteringViewport