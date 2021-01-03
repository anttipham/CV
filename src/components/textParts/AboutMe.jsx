import React from 'react'
import styled from 'styled-components'
import leaderboardPic from '../../pictures/leaderboard.jpg'
import OpenModal from '../OpenModal'
import Img from '../displayComponents/Img'
import LinkToNewTab from '../displayComponents/LinkToNewTab'

const Leaderboard = styled(Img)`
  /* float: right; */
  display: block;
  margin: 0 auto;
  max-width: 530px;
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
      <p>
        Datatähden viralliset nettisivut:
        <br />
        <LinkToNewTab href="https://datatahti.fi/" />
      </p>
    </>
  )
  const source = (
    <>
      <p>
        Teknologiateollisuuden stipendin saajat:
        <br />
        <LinkToNewTab href="https://techfinland100.fi/wp/wp-content/uploads/2020/05/Ylioppilaat-kev%C3%A4t-2020.pdf" />
      </p>
      <p>
        Pitkän matematiikan kirjoittajien määrä:
        <br />
        <LinkToNewTab href="https://www.ylioppilastutkinto.fi/ext/stat/FS2020A2011T2010.pdf" />
      </p>
    </>
  )

  return (
    <div>
      <h2>Tietoa minusta</h2>
      <p>
        Olen päässyt lukioiden välisessä, valtakunnallisessa Datatähti-ohjelmointikilpailussa
        <OpenModal>{datatahtiContent}</OpenModal>

        kymmenennelle sijalle vuonna 2020 ja saanut sieltä <LinkToNewTab href="/assets/pdf/datatahti.pdf">kunniakirjan</LinkToNewTab>. Olen myös suorittanut 26 opintopisteen verran yliopiston koodauskursseja kaikki 5:n arvosanalla.
        {/* <InfoModal text="opintosuoritukseni"><Studies /></InfoModal> */}
      </p>
      <p>
        Sain keväällä 2020 {}
        <LinkToNewTab href="https://techfinland100.fi/ylioppilaat2020/">
          Teknologiateollisuuden stipendin
        </LinkToNewTab>, jonka sai vain {}
        149 kokelasta 13 760 pitkän matematiikan kirjoittajista (eli noin yhden prosentin parhaimmisto).
        {/* https://www.ylioppilastutkinto.fi/tietopalvelut/tilastot/tilastotaulukot */}
        <OpenModal text="lähde">{source}</OpenModal>
      </p>
      <p>
        Olen siis taitava sekä ohjelmoinnissa että matematiikassa ja minulla on oikeaa näyttöäkin niistä.
      </p>

      {/* <LinkToNewTab href="https://datatahti.fi/aiemmat-vuodet.html"> */}
      <LinkToNewTab href={leaderboardPic}>
        <Leaderboard
          src={leaderboardPic}
          alt="Kuva Datatähti 2020:n tulokset"
        />
      </LinkToNewTab>
    </div>
  )
}

export default AboutMe
