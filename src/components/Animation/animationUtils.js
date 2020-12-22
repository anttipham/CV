export const baseUnit = 1/10

/**
 * Käytetään styled componenteissa.
 * @param {number} multiplier Kerroin, jolla voidaan vaikuttaa durationin arvoon. Ei voi olla pienempi kuin 0 tai suurempi kuin 1.
 */
export const insertDuration = (multiplier = 1) => {
  if (multiplier < 0 || 1 < multiplier) {
    throw new Error('Argument \'time\' must be between 0 and 1')
  }
  return ({ duration }) => multiplier * duration
}