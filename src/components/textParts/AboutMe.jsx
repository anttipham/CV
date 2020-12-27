import React from 'react'
import styled from 'styled-components'
import leaderboardPic from '../../pictures/leaderboard.jpg'
import InfoModal from '../InfoModal'
import LinkToNewTab from '../wrappedComponents/LinkToNewTab'

const FloatRight = styled.img`
  /* float: right; */
  max-width: 100%;
`

const AboutMe = () => {
  const datatahtiContent = (
    <>
      <p>
        Datatähti on ohjelmointikilpailu, jonka järjestävät useat yliopistot yhteistyössä Matemaattisten Aineiden Opettajien Liiton kanssa. Kilpailuun voi osallistua peruskoulu- ja lukioikäiset opiskelijat.
      </p>
      <p>
        Kilpailun aiheena on algoritmien suunnittelu ja toteutus.
      </p>
      <p>
        Juuri tästä kisasta valitaan Suomelle kuuden ja neljän hengen joukkueet kansainvälisiin koodausolympialaisiin (BOI ja IOI).
      </p>
    </>
  )
  const source = (
    <>
      <p>
        Teknologiateollisuuden stipendin saajat:
      </p>
      <LinkToNewTab>https://techfinland100.fi/wp/wp-content/uploads/2020/05/Ylioppilaat-kev%C3%A4t-2020.pdf</LinkToNewTab>
      <p>
        Pitkän matematiikan kirjoittajien määrä:
      </p>
      <LinkToNewTab>https://www.ylioppilastutkinto.fi/ext/stat/FS2020A2011T2010.pdf</LinkToNewTab>
    </>
  )

  return (
    <div>
      <h2>Tietoa minusta</h2>
      <p>
        Olen päässyt lukion välisessä, valtakunnallisessa {}
        <LinkToNewTab href="https://datatahti.fi/">
          Datatähti-ohjelmointikilpailussa
        </LinkToNewTab>
        <InfoModal>{datatahtiContent}</InfoModal> {}

        kymmenennelle sijalle vuonna 2020 sekä suorittanut 26 opintopisteen verran yliopiston koodauskursseja kaikki 5:n arvosanalla.
        {/* <InfoModal text="opintosuoritukseni"><Studies /></InfoModal> */}
      </p>
      <p>
        Sain keväällä 2020 {}
        <LinkToNewTab href="https://techfinland100.fi/ylioppilaat2020/">
          Teknologiateollisuuden stipendin
        </LinkToNewTab>, jonka sai vain {}
        149 kokelasta
        {/* <SmallLinkAbove href="https://techfinland100.fi/wp/wp-content/uploads/2020/05/Ylioppilaat-kev%C3%A4t-2020.pdf" /> {} */}

        13 760 pitkän matematiikan kirjoittajista
        {/* <SmallLinkAbove href="https://www.ylioppilastutkinto.fi/ext/stat/FS2020A2011T2010.pdf" /> */}
        {/* https://www.ylioppilastutkinto.fi/tietopalvelut/tilastot/tilastotaulukot */}
        <InfoModal text="lähde">{source}</InfoModal>
      </p>
      <p>
        Olen siis taitava sekä ohjelmoinnissa että matematiikassa ja minulla on oikeaa näyttöäkin niistä.
      </p>

      {/* <LinkToNewTab href="https://datatahti.fi/aiemmat-vuodet.html"> */}
      <FloatRight
        src={leaderboardPic}
        alt="Kuva Datatähti 2020:n tulokset"
      />
      {/* </LinkToNewTab> */}
    </div>
  )
}

export default AboutMe
