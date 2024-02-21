import { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import PracticalExperience from './PracticalExperience'
import Buttons from './Buttons'
import '../styles/CvApp.css'

function CvApp() {
  const [educationList, setEducationList] = useState([]);
  const [practicalExperienceList, setPracticalExperienceList] = useState([]);
  const [finalCV, setFinalCV] = useState([false]);
  // button to display CV without buttons / input fields. 
  // Download as pdf?
  function handleEducationAdd() {
    // add another Education component
    setEducationList(educationList.concat(<Education key={educationList.length}/>))
  }
  function handlePracticalExperienceAdd() {
    // add another Education component
    setPracticalExperienceList(practicalExperienceList.concat(<PracticalExperience key={practicalExperienceList.length}/>))
  }
  function handleFinalize() {
    finalCV ? setFinalCV(false) : setFinalCV(true)
  }

  return (
<div className="cv-application">
  <GeneralInfo />
  <Education />
  {educationList}
  <Buttons 
    // className={finalCV ? "active" : "inactive"}
    name="Add Another Education"
    onClick={handleEducationAdd}
  />
  <PracticalExperience />
  {practicalExperienceList}
  <Buttons 
    name="Add Another Practical Experience"
    onClick={handlePracticalExperienceAdd}
  />
  <br />
  <Buttons
    name="Finalize"
    onClick={handleFinalize}
  />
</div>
//Add Finalize Button to remove Edit/Submit Buttons
  )
}

export default CvApp
