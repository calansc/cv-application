import { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import PracticalExperience from './PracticalExperience'
import './styles/App.css'

function CvApp() {

  return (
<div className="cv-application">
  <GeneralInfo />
  <Education />
  <PracticalExperience />
</div>
  )
}

export default CvApp
