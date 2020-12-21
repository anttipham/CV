import React from 'react'
import styled from 'styled-components'
import leaderboardPic from '../../pictures/leaderboard.jpg'
import { A } from '../LinkToNewTab'

const FloatRight = styled.img`
  float: right;
  /* width: 500px; */
`

const AboutMe = () => {
  return (
    <div>
      <A href="https://datatahti.fi/aiemmat-vuodet.html">
        <FloatRight
          src={leaderboardPic}
          alt="Kuva Datatähti 2020:n tulokset"
        />
      </A>
      <h2>Tietoa minusta</h2>
      <p>
        Olen päässyt lukion välisessä, valtakunnallisessa {}
        <A href="https://datatahti.fi/">
          Datatähti-ohjelmointikilpailussa
        </A> {}
        kymmenennelle sijalle sekä suorittanut 26 opintopisteen verran yliopiston koodauskursseja kaikki 5:n arvosanalla.
      </p>
      <p>
        Sain keväällä 2020 {}
        <A href="https://techfinland100.fi/ylioppilaat2020/">
          Teknologiateollisuuden stipendin
        </A>, jonka sai vain {}
        <A href="https://techfinland100.fi/wp/wp-content/uploads/2020/05/Ylioppilaat-kev%C3%A4t-2020.pdf">
          149 kokelasta
        </A> {}
        <A href="https://www.ylioppilastutkinto.fi/ext/stat/FS2020A2011T2010.pdf">
          {/* https://www.ylioppilastutkinto.fi/tietopalvelut/tilastot/tilastotaulukot */}
          13 760 pitkän matematiikan kirjoittajista
        </A>.
      </p>
      <p>
        Olen siis taitava sekä ohjelmoinnissa että matematiikassa ja minulla on oikeaa näyttöäkin niistä.
      </p>
    </div>
  )
}

export default AboutMe
