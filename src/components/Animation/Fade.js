import styled from 'styled-components'
import { baseUnit, insertDuration } from './animationUtils'

const Fade = styled.div`
  transition: opacity ${insertDuration(7*baseUnit)}ms ease-in-out ${insertDuration(3*baseUnit)}ms;
  opacity: ${({ entering, entered }) => entering || entered ? 1 : 0};
`

export default Fade