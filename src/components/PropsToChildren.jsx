import React from 'react'

const PropsToChildren = ({ WrapperComponent, children, ...props }) => {
  return (
    <WrapperComponent>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, props)
      )}
    </WrapperComponent>
  )
}

export default PropsToChildren
