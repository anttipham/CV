import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const AnimateWhenActivated = ({ active, timeout, children }) => {
  return (
    <Transition in={active} timeout={timeout}>
      {(state) => React.Children.map(children,
        (child) => React.cloneElement(child, {
          [state]: true,
          duration: timeout
        })
      )}
    </Transition>
  )
}

AnimateWhenActivated.propTypes = {
  active: PropTypes.bool.isRequired,
  timeout: PropTypes.number.isRequired,
  // styledAnimationComponent: PropTypes.elementType,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.func
  ])
  // styledAnimationComponentProps: PropTypes.object
}

export default AnimateWhenActivated