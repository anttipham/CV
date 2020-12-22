import React from 'react'
import styled from 'styled-components'

// const FlexParent = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `
const HeaderDiv = styled.div`
  font-weight: 700;
  margin-top: 10px;
`
const TextDiv = styled.div`
  padding-left: 20px;
`

const Programming = () => {
  return (
    <div>
      <h2>Ohjelmointiin liittyvät teknologiat yms.</h2>

      <div>
        <HeaderDiv>
            Ohjelmointikielet
        </HeaderDiv>
        <TextDiv>
            C++, Python, JavaScript
        </TextDiv>
        <HeaderDiv>
            GUI
        </HeaderDiv>
        <TextDiv>
            Python Tkinter
        </TextDiv>
        <HeaderDiv>
            Full Stack
        </HeaderDiv>
        <TextDiv>
            Express.js, React, Redux, GraphQL
        </TextDiv>
        <HeaderDiv>
            Tietokannat
        </HeaderDiv>
        <TextDiv>
            MongoDB
        </TextDiv>
        <HeaderDiv>
            Ongelmanratkaisutavat
        </HeaderDiv>
        <TextDiv>
            Dynamic programming, hyppytaulukot jne.
        </TextDiv>
        <HeaderDiv>
            Algoritmit ja tietorakenteet
        </HeaderDiv>
        <TextDiv>
            Suffiksitaulukko, segmenttipuu, Ford–Fulkersonin algoritmi jne.
        </TextDiv>
      </div>
    </div>
  )
}

export default Programming
