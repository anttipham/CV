import React from 'react'
import TableRow from './TableRow'

const Programming = () => {
  return (
    <div>
      <h2>Osaamani ohjelmointiin liittyvät teknologiat yms.</h2>

      <TableRow left="Ohjelmointikielet">
        C++, Python, JavaScript
      </TableRow>
      <TableRow left="GUI">
        Python Tkinter
      </TableRow>
      <TableRow left="Full Stack">
        Express.js, React, Redux, GraphQL
      </TableRow>
      <TableRow left="Tietokannat">
        MongoDB
      </TableRow>
      <TableRow left="Ongelmanratkaisutavat">
        Dynamic programming, hyppytaulukot jne.
      </TableRow>
      <TableRow left="Algoritmit ja tietorakenteet">
        Suffiksitaulukko, segmenttipuu, Ford–Fulkersonin algoritmi jne.
      </TableRow>
    </div>
  )
}

export default Programming
