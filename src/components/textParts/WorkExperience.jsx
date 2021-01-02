import React from 'react'
import TableRow from './TableRow'

const WorkExperience = () => {
  return (
    <div>
      <h2>Työkokemus</h2>

      <TableRow left="Outloud Oy" right="1.6. – 12.6.2015">
        Ohjelmistosuunnittelu, sovellusten ideointi, ATK-tuki
      </TableRow>
      <TableRow left="Helapuiston päiväkoti" right="26.5. – 27.5.2016">
        Lastentarhanopettaja
      </TableRow>
      <TableRow left="K‑Supermarket HerkkuDuo" right="28.11. – 9.12.2016">
        Hyllyttäjä
      </TableRow>
      <TableRow left="Hope ry" right="24.8. – 17.12.2020">
        Full Stack -ohjelmoija, ohjelmistokehittäjä, tekninen tuki
      </TableRow>
    </div>
  )
}

export default WorkExperience
