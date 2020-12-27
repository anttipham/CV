import React from 'react'
import LinkToNewTab from '../wrappedComponents/LinkToNewTab'

const Introduction = () => {
  const sourceCode = 'https://github.com/anttipham/CV'

  return (
    <div>
      <div>
        <b>Päivitetty:</b> 21.12.2020
      </div>

      <p>
        Tämä sivusto on create-react-appilla tehty. Olen työstänyt tätä sivua yksin (välillä Googlaten) näyttääkseni, että osaan koodata. Lähdekoodi on näkyvillä <LinkToNewTab href={sourceCode}>GitHubissa</LinkToNewTab>.
      </p>
    </div>
  )
}

export default Introduction
