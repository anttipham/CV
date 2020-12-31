import React from 'react'
import LinkToNewTab from '../wrappedComponents/LinkToNewTab'

const UPDATED = '31.12.2020'

const Introduction = () => {
  const sourceCode = 'https://github.com/anttipham/CV'

  return (
    <div>
      <div>
        <b>Päivitetty:</b> {UPDATED}
      </div>

      <p>
        Tämä sivusto on create-react-appilla tehty. Olen työstänyt tätä sivua yksin (välillä Googlaten). Lähdekoodi on näkyvillä <LinkToNewTab href={sourceCode}>GitHubissa</LinkToNewTab>.
      </p>
    </div>
  )
}

export default Introduction
