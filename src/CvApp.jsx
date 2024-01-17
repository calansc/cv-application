import { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import PracticalExperience from './PracticalExperience'
import Buttons from './Buttons'
import './styles/App.css'

function CvApp() {
  const [educationList, setEducationList] = useState([]);
  const [practicalExperienceList, setPracticalExperienceList] = useState([]);
  function handleEducationAdd() {
    // add another Education component? 
    setEducationList(educationList.concat(<Education key={educationList.length}/>))
  }
  function handlePracticalExperienceAdd() {
    // add another Education component? 
    setPracticalExperienceList(practicalExperienceList.concat(<PracticalExperience key={practicalExperienceList.length}/>))
  }

  return (
<div className="cv-application">
  <GeneralInfo />
  <Education />
  {educationList}
  <Buttons 
    name="Add Another Education"
    onClick={handleEducationAdd}
  />
  <PracticalExperience />
  {practicalExperienceList}
  <Buttons 
    name="Add Another Practical Experience"
    onClick={handlePracticalExperienceAdd}
  />
</div>
//Add Finalize Button to remove Edit/Submit Buttons
  )
}

export default CvApp
