import styled from 'styled-components'
import { baseUnit, insertDuration } from '../Animation/animationUtils'

/**
 * Kun entering === true
 * 1. LoadingScreen liikkuu pois
 * 2. Taustakuva sumettuu ja CV-teksti tulee näkyville
 */

export const LoadingScreen = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 101;
  background-color: white;

  transition: transform ${insertDuration(baseUnit)}ms ease-in-out;
  transform-origin: 100% 0%;
  transform: scale(1, 1);
  
  ${({ entering, entered }) => (entering || entered) && `
    transform: scale(0, 1);
  `}
`

// Kuvat
const Img = styled.img`
  height: 100vh;
  position: absolute;
`

export const BackgroundImg = styled(Img)`
  transition: filter ${insertDuration(9*baseUnit)}ms ease-in-out ${insertDuration(baseUnit)}ms;

  ${({ entering, entered }) => (entering || entered) && `
    filter: blur(30px) brightness(75%);
  `}
`
export const AnttiImg = styled(Img)`
`
export const CvImg = styled(Img)`
  top: 55vh;
  right: -10vw;
  height: 70vh;
  @media only screen and (min-width: 70vh) {
    top: 45vh;
    right: -5vw;
    height: 100vh;
  }
  @media only screen and (min-width: 142vh) {
    top: auto;
  }
  @media only screen and (min-width: 172vh) {
    right: auto;
  }

  transition: opacity ${insertDuration(3*baseUnit)}ms ease-in-out ${insertDuration(baseUnit)}ms;
  opacity: 0;
  
  ${({ entering, entered }) => (entering || entered) && `
    opacity: 1;
  `}
`
// export const CvText = styled.div`
//   position: absolute;
//   width: 80%;
//   margin: 150px 0;

//   text-align: right;
//   font-family: Arial;
//   font-weight: 700;
//   font-size: 2000%;
//   color: white;

//   transition: opacity ${insertDuration(2*baseUnit)}ms ease-in-out ${insertDuration(baseUnit)}ms;
//   opacity: 0;

//   ${({ entering, entered }) => (entering || entered) && `
//     opacity: 1;
//   `}
// `
