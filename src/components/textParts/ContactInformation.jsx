import React from 'react'
import styled from 'styled-components'

const FloatRight = styled.div`
  float: right;
`
const InlineH2 = styled.h2`
  display: inline-block;
  padding-right: 1em;
`
// const InlineH3 = styled.h3`
//   display: inline-block;
// `

const ContactInformation = () => {
  return (
    <div>
      <FloatRight>
        <InlineH2>Päivitetty:</InlineH2> 21.12.2020
      </FloatRight>

      <div>
        <InlineH2>Antti Minh An Pham</InlineH2>
        <span>Syntynyt 3.2.2001</span>
      </div>

      <div>Metsävirnankatu 8, 33720 Tampere</div>
      <div>antti.pham@gmail.com</div>
      <div>040 5588207</div>
      <em>Puhelimeni on yleensä äänettömällä, joten minuun kannattaa ottaa yhteyttä sähköpostilla.</em>
    </div>
  )
}

export default ContactInformation
