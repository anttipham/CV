import React from 'react'
import { Th } from '../displayComponents/Table'

const Language = () => {
  return (
    <div>
      <h2>Kielitaidot</h2>

      <table>
        <tbody>
          <tr>
            <Th>Suomi</Th>
            <td>Äidinkieli</td>
          </tr>
          <tr>
            <Th>Englanti</Th>
            <td>Sujuva</td>
          </tr>
          <tr>
            <Th>Japani</Th>
            <td>Sujuva</td>
          </tr>
          <tr>
            <Th>Ruotsi</Th>
            <td>Tyydyttävä</td>
          </tr>
          <tr>
            <Th>Vietnam</Th>
            <td>Alkeet</td>
          </tr>
          <tr>
            <Th>Saksa</Th>
            <td>Alkeet</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Language
