import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import AnimateWhenActivated from './AnimateWhenActivated'

const AnimateWhenEnteringViewport = ({ active: forceActive = false, timeout, children, styledAnimationComponent: StyledAnimationComponent }) => {
  const [active, setActive] = useState(false)
  const ref = useRef()

  const handleScroll = () => {
    /**
     * Laskee, onko elementti näkyvillä näytöllä.
     * @param {Object} elementRectangle Elementin paikkojen tiedot.
     */
    const inViewPort = ({ top, bottom }) => {
      const viewportMargin = window.innerHeight / 8

      // Paikkakoordinaateissa (0, 0) on näytön vasen yläkulma ja
      // oikean alakulman koordinaatit ovat (window.innerWidth, window.innerHeight)
      const aboveViewport = (elementCoordinate) =>
        elementCoordinate < 0 + viewportMargin
      const belowViewport = (elementCoordinate) =>
        window.innerHeight - viewportMargin < elementCoordinate

      return (
        // Elementin yläreuna on keskellä ruutua
        (!aboveViewport(top) && !belowViewport(top))
        // Elementin alareuna on keskellä ruutua
        || (!aboveViewport(bottom) && !belowViewport(bottom))
        // Jos elementin yläreuna on näytön yllä ja alareuna näytön alla, elementin täytyy olla keskellä näyttöä. (Elementti on suurempi kuin näyttö.)
        || (aboveViewport(top) && belowViewport(bottom))
      )
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