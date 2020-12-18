import styled from 'styled-components'

const baseUnit = 1/3

/**
 * Käytetään styled componenteissa.
 * @param {number} multiplier Kerroin, jolla voidaan vaikuttaa durationin arvoon. Ei voi olla pienempi kuin 0 tai suurempi kuin 1.
 */
const insertDuration = (multiplier) => {
  if (multiplier < 0 || 1 < multiplier) {
    throw new Error('Argument \'time\' must be between 0 and 1')
  }
  return ({ duration }) => multiplier * duration
}

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
  transition: filter ${insertDuration(2*baseUnit)}ms ease-in-out ${insertDuration(baseUnit)}ms;

  ${({ entering, entered }) => (entering || entered) && `
    filter: blur(15px) brightness(75%);
  `}
`
export const AnttiImg = styled(Img)`
`
export const CvImg = styled(Img)`
  top: 55%;
  right: -75px;
  height: 70vh;
  @media only screen and (min-width: 620px) {
    top: 45%;
    right: -95px;
    height: 100vh;
  }
  @media only screen and (min-width: 1260px) {
    top: auto;
  }
  @media only screen and (min-width: 1620px) {
    right: auto;
  }

  transition: opacity ${insertDuration(2*baseUnit)}ms ease-in-out ${insertDuration(baseUnit)}ms;
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
