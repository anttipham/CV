import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NoWrapTd = styled.td`
  white-space: nowrap;
`
const PaddedTd = styled.td`
  padding: 0 0 10px 20px;
`

const WorkExperienceRow = ({ place, time, children }) => {
  return (
    <>
      <tr>
        <th>{place}</th>
        <NoWrapTd>{time}</NoWrapTd>
      </tr>
      <tr>
        <PaddedTd colSpan="2">{children}</PaddedTd>
      </tr>
    </>
  )
}

WorkExperienceRow.propTypes = {
  place: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default WorkExperienceRow
