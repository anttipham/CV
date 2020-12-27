import React from 'react'
import LinkToNewTab from '../wrappedComponents/LinkToNewTab'

const Studies = () => {
  const opintopolkuUrl = 'https://opintopolku.fi/koski/opinnot/c9e4209870af4d1e9073fa5b6b165c0b'
  return (
    <>
      <p>
        Lisätietoa opinnoistani ja niiden arvosanoista voi katsoa Opetushallituksen ylläpitämästä Opintopolku-sivustolta:
      </p>
      <p>
        <LinkToNewTab href={opintopolkuUrl}>{opintopolkuUrl}</LinkToNewTab>
      </p>
      <p>
        Yliopistossa käytetään 0–5-asteikkoa, lukiossa 4–10-asteikkoa ja S-merkintää (suoritettu).
      </p>
    </>
  )
}

export default Studies
