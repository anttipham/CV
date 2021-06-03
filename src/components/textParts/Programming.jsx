import React from 'react'
import FlexList from '../displayComponents/FlexList'

const Programming = () => {
  return (
    <div>
      <h2>Osaamani ohjelmointiin liittyvät teknologiat yms.</h2>

      <FlexList left="Ohjelmointikielet">
        C++, Python, JavaScript
      </FlexList>
      <FlexList left="GUI">
        Python Tkinter
      </FlexList>
      <FlexList left="Full Stack">
        Express.js, React, Redux, GraphQL
      </FlexList>
      <FlexList left="Tietokannat">
        MongoDB, SQLite
      </FlexList>
      <FlexList left="Ongelmanratkaisutavat">
        Dynamic programming, hyppytaulukot jne.
      </FlexList>
      <FlexList left="Algoritmit ja tietorakenteet">
        Suffiksitaulukko, segmenttipuu, Ford–Fulkersonin algoritmi jne.
      </FlexList>
    </div>
  )
}

export default Programming
