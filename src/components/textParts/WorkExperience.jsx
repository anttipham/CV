import React from 'react'
import FlexList from '../displayComponents/FlexList'
import LinkToNewTab from '../displayComponents/LinkToNewTab'

const WorkExperience = () => {
  return (
    <div>
      <h2>Työkokemus</h2>

      <FlexList left="Outloud Oy" right="1.6. – 12.6.2015">
        Ohjelmistosuunnittelu, sovellusten ideointi, ATK-tuki
      </FlexList>
      <FlexList left="Helapuiston päiväkoti" right="26.5. – 27.5.2016">
        Lastentarhanopettaja
      </FlexList>
      <FlexList left="K‑Supermarket HerkkuDuo" right="28.11. – 9.12.2016">
        Hyllyttäjä
      </FlexList>
      <FlexList left="Hope ry" right="24.8. – 17.12.2020">
        Full Stack -ohjelmoija, ohjelmistokehittäjä, tekninen tuki
      </FlexList>

      <p>
        <LinkToNewTab href="assets/pdf/tyotodistukset.pdf">Tässä</LinkToNewTab> on työtodistukseni.
      </p>
    </div>
  )
}

export default WorkExperience
