import styled from 'styled-components'
import { insertDuration } from './animationUtils'

const Fade = styled.div`
  transition: opacity ${insertDuration()}ms ease-in-out;
  opacity: ${({ entering, entered }) => entering || entered ? 1 : 0};
`

export default Fade