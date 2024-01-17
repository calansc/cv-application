import { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import './styles/App.css'

function CvApp() {

  return (
<div className="cv-application">
  <GeneralInfo />
  <Education />
</div>
  )
}

export default CvApp
