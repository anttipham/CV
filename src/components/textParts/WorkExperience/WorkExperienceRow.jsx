import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PaddedTd = styled.td`
  padding-bottom: 10px;
`

const WorkExperienceRow = ({ place, time, children }) => {
  return (
    <>
      {/* <Table>
        <tbody> */}
      <tr>
        <th>{place}</th>
        <td style={{ whiteSpace: 'nowrap' }}>{time}</td>
      </tr>
      <tr>
        <PaddedTd colSpan="2">{children}</PaddedTd>
      </tr>
      {/* </tbody>
      </Table> */}
    </>
  )
}

WorkExperienceRow.propTypes = {
  place: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default WorkExperienceRow
