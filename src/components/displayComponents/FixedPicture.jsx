import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.img`
  background: url(${({ src }) => src}) center center/40% no-repeat fixed;
  width: 100%;
  height: ${({ height }) => height ? height : 200}px;
`

const FixedPicture = ({ src, height }) => {
  return (
    <Div src={src} height={height} />
  )
}

FixedPicture.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number
}

export default FixedPicture
