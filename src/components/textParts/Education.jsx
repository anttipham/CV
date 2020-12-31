import React from 'react'
import OpenModal from '../OpenModal'
import LinkToNewTab from '../wrappedComponents/LinkToNewTab'
import TableRow from './TableRow'

const Education = () => {
  const courseInfo = (
    <div>
      <h3>
        <LinkToNewTab href="https://courses.helsinki.fi/fi/aytkt21012/132861520">
          Algoritmit ongelmanratkaisussa
        </LinkToNewTab>
      </h3>
      <p>
        Kurssilla annetaan algoritmeihin ja ongelmanratkaisuun liittyviä koodaustehtäviä. Palautteen mukaan kurssi oli erittäin työläs ja vaikea.
      </p>
      <p>
        Minä sitten päätin suorittaa tämän vaikean kurssin lukiolaisena, vaikka en ollut täyttänyt edes kurssin esitietovaatimuksia. Tämän vuoksi minun joutui opettelemaan joitakin tietorakenteita omatoimisesti.
      </p>
      <p>
        Arvosanaan 5 pitää tehdä keskimäärin viisi tehtävää joka viikko. Kurssin tehtävät ja vähäiset kurssimateriaalit voi katsoa täältä:
        <br />
        <LinkToNewTab href="https://cses.fi/alon20/list/" />
      </p>
      <p>
        <em>
          Kurssimateriaalit olivat joskus aivan mystisiä, esim. suffiksitaulukko.
        </em>
      </p>
    </div>
  )

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
          <TableRow left="Tampereen yliopisto" right="2019">
            Erillisoikeus ohjelmoinnin kurssille
          </TableRow>
          <TableRow left="Avoin yliopisto">
            <>
              Joitakin kursseja Tampereen ja Helsingin yliopistosta
              <p>
                Haluan erikseen mainita suorittaneeni Helsingin yliopistossa Algoritmit ongelmanratkaisussa -kurssin arvosanalla 5.
                <OpenModal>{courseInfo}</OpenModal>
                Tämä suoritus todistaa ongelmanratkaisutaitoni ja sinnikkyyteni olevan erinomaisia.
              </p>
            </>
          </TableRow>
        </tbody>
      </table>

      <p>
        Lisätietoa opinnoistani ja niiden arvosanoista voi katsoa Opetushallituksen ylläpitämästä Opintopolku-sivustolta:
        <br />
        <LinkToNewTab href="https://opintopolku.fi/koski/opinnot/c9e4209870af4d1e9073fa5b6b165c0b" />
      </p>
      <p>
        Yliopistossa käytetään 0–5-asteikkoa, lukiossa 4–10-asteikkoa ja S-merkintää (suoritettu).
      </p>
    </div>
  )
}

export default Education
