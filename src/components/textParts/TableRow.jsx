import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Left = styled.th`
  /* width: 470px; */
`
const Right = styled.th`
  white-space: nowrap;
`
const PaddedTd = styled.td`
  padding: 0 0 10px 20px;
`

const TableRow = ({ left, right, children }) => {
  return (
    <>
      <tr>
        <Left>{left}</Left>
        <Right>{right}</Right>
      </tr>
      <tr>
        <PaddedTd colSpan="2">{children}</PaddedTd>
      </tr>
    </>
  )
}

TableRow.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element
  ]),
}

export default TableRow
