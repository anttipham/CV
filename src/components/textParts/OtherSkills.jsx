import React from 'react'
import OpenModal from '../OpenModal'

const OtherSkills = () => {
  return (
    <div>
      <h2>Muut taidot</h2>

      <p>
        Äänen-, kuvan- ja videonkäsittelyohjelmien käyttö (Audacity, GIMP ja japaninkielinen AviUtl)
      </p>
      <p>
        Laaja tietämys tietokoneiden komponenteista (eli tietokoneiden osista), ja osaan kasata tietokoneen.
      </p>
      <p>
        Osaan väkisin vaihtaa Windows 10 -tietokoneen salasanan, joten tietokoneesi salasanan vahvuudella ei ole mitään merkitystä minun edessäni &gt;:D
        <OpenModal>
          <p>
            Opin tämän työkokeilussa Hopessa. Lahjoitettujen tietokoneiden salasanat joskus unohtuvat, jolloin tarvitaan järempiä keinoja.
          </p>
        </OpenModal>
      </p>
      <p>
        Osaan käyttää taulukkolaskentaohjelmia.
      </p>
    </div>
  )
}

export default OtherSkills
