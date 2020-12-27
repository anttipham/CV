import React from 'react'
import LinkToNewTab from '../wrappedComponents/LinkToNewTab'
import TableRow from './TableRow'

const Education = () => {
  return (
    <div>
      <h2>Koulutus</h2>
      {/* <OpenModal>{modalContent}</OpenModal> */}

      <table>
        <tbody>
          <TableRow left="Etelä-Hervannan koulu" right="2008 – 2017">
            Yläaste suoritettu matematiikka-tietotekniikka -painoitteisen opetussuunnitelman mukaan.
          </TableRow>
          <TableRow left="Tampereen teknillinen lukio" right="2017 – 2020">
            Matematiikka ja tekniikka -linja
          </TableRow>
        </tbody>
      </table>

      <p>
        Lisätietoa opinnoistani ja niiden arvosanoista voi katsoa Opetushallituksen ylläpitämästä Opintopolku-sivustolta:
        <br />
        <LinkToNewTab>https://opintopolku.fi/koski/opinnot/c9e4209870af4d1e9073fa5b6b165c0b</LinkToNewTab>
      </p>
      <p>
        Yliopistossa käytetään 0–5-asteikkoa, lukiossa 4–10-asteikkoa ja S-merkintää (suoritettu).
      </p>
    </div>
  )
}

export default Education
