import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FlexParent = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const LeftHeader = styled.div`
  width: 60%;
  min-width: 215px;
  white-space: nowrap;
  font-weight: 700;
  flex-grow: 2;
`
const RightHeader = styled.div`
  width: 40%;
  white-space: nowrap;
  font-weight: 700;
  flex-grow: 1;
`
const Content = styled.div`
  width: calc(100% - 20px);
  margin: 0 0 10px 20px;
  flex-grow: 2;

  & p {
    margin: 10px 0;
  }
`

/**
 * Flexbox lista otsikoiden kanssa
 * @param props
 * @param props.left vasen otsikko
 * @param props.right right on lihoitettu teksti otsikon oikealla puolella
 * @param props.children sisältö
 */
const FlexList = ({ left, right, children }) => {
  return (
    <FlexParent>
      <LeftHeader>{left}</LeftHeader>
      <RightHeader>{right}</RightHeader>
      <Content>
        {typeof children === 'string' ? <p>{children}</p> : children}
      </Content>
    </FlexParent>
  )
}

FlexList.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element
  ]),
}

export default FlexList
