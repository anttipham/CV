import React from 'react'
import LinkToNewTab from '../displayComponents/LinkToNewTab'

const UPDATED = '31.12.2020'

const Introduction = () => {
  const sourceCode = 'https://github.com/anttipham/CV'

  return (
    <div>
      <div>
        <b>Päivitetty:</b> {UPDATED}
      </div>

      <p>
        Tämä sivusto on create-react-appilla tehty. Sivun kaikki linkit avautuvat uuteen ikkunaan.
      </p>
      <p>
        Olen työstänyt tätä sivua yksin (välillä Googlaten). Lähdekoodi on näkyvillä <LinkToNewTab href={sourceCode}>GitHubissa</LinkToNewTab>. Sivu on vielä kesken, ja suunnittelen ulkoasun parantamista vielä.
      </p>
    </div>
  )
}

export default Introduction
