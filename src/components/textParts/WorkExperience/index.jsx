import React from 'react'
import WorkExperienceRow from './WorkExperienceRow'

const WorkExperience = () => {
  return (
    <div>
      <h2>Työkokemus</h2>


      <table>
        <tbody>
          <WorkExperienceRow place="Outloud Oy" time="1.6. – 12.6.2015">
            Ohjelmistosuunnittelu, sovellusten ideointi, ATK-tuki
          </WorkExperienceRow>
          <WorkExperienceRow place="Helapuiston päiväkoti" time="26.5. – 27.5.2016">
            Lastentarhanopettaja
          </WorkExperienceRow>
          <WorkExperienceRow place="K‑Supermarket HerkkuDuo" time="28.11. – 9.12.2016">
            Hyllyttäjä
          </WorkExperienceRow>
          <WorkExperienceRow place="Hope ry" time="24.8. – 17.12.2020">
            Full Stack -ohjelmoija, ohjelmistokehittäjä, tekninen tuki
          </WorkExperienceRow>
        </tbody>
      </table>
    </div>
  )
}

export default WorkExperience
