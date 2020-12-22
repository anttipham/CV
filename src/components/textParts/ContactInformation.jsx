import React from 'react'
// import styled from 'styled-components'

// const InlineH2 = styled.h2`
//   display: inline-block;
//   padding-right: 0em;
// `
// const InlineH3 = styled.h3`
//   display: inline-block;
// `

const ContactInformation = () => {
  const email = 'antti.pham@gmail.com'
  return (
    <div>
      <div>
        <b>Päivitetty:</b> 21.12.2020
      </div>

      <h2>Antti Minh An Pham</h2>
      <h3>Syntynyt 3.2.2001</h3>

      <div>Metsävirnankatu 8, 33720 Tampere</div>
      <div><a href={`mailto:${email}`}>{email}</a></div>
      <div>0405588207</div>
      <p>
        <em>
          Puhelimeni on yleensä äänettömällä, joten minuun kannattaa ottaa yhteyttä sähköpostilla.
        </em>
      </p>
    </div>
  )
}

export default ContactInformation
