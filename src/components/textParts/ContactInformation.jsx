import React from 'react'
import styled from 'styled-components'

const FloatRight = styled.div`
  float: right;
`
const InlineH2 = styled.h2`
  display: inline-block;
  padding-right: 1em;
`

const ContactInformation = () => {
  return (
    <div>
      <FloatRight>
        <h3>Päivitetty:</h3> 21.12.2020
      </FloatRight>

      <InlineH2>Antti Minh An Pham</InlineH2>
      <span>Syntynyt 3.2.2001</span>

      <div>Metsävirnankatu 8, 33720 Tampere</div>
      <div>antti.pham@gmail.com</div>
      <div>040 5588207</div>
      <div>Puhelimeni on yleensä äänettömällä. Minuun kannattaa ottaa yhteyttä sähköpostilla.</div>
    </div>
  )
}

export default ContactInformation
