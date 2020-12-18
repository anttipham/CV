import React from 'react'
import PropTypes from 'prop-types'
import AnimateWhenActivated from './AnimateWhenActivated'

const AnimateChildren = ({
  active,
  timeout,
  styledAnimationComponent: StyledAnimationComponent,
  animationEnteringComponent: AnimationEnteringComponent,
  children
}) => {
  // if (!styledAnimationComponent) {
  //   throw new Error('Prop \'styledAnimationComponent\' not given to Animation component')
  // }
  if (!AnimationEnteringComponent) {
    AnimationEnteringComponent = AnimateWhenActivated
  }

  return React.Children.map(children, (child) => (
    <AnimationEnteringComponent styledAnimationComponent={StyledAnimationComponent} timeout={timeout} active={active}>
      {child}
    </AnimationEnteringComponent>
  ))
}

AnimateChildren.propTypes = {
  active: PropTypes.bool,
  timeout: PropTypes.number.isRequired,
  styledAnimationComponent: PropTypes.elementType.isRequired,
  animationEnteringComponent: PropTypes.elementType,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ])
}

export default AnimateChildren