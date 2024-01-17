import { useState } from "react";
import TextInput from "./CustomInput";
import Buttons from "./Buttons";

export default function PracticalExperience() {
    const [practicalExperience, setPracticalExperience] = useState({company:'', position:'', responsibilities:'', dates:''});
    const [editing, setEditing] = useState(true);
    function handleCompanyChange(e) {
        setPracticalExperience({...practicalExperience, company: e.target.value});
    }
    function handlePositionChange(e) {
        setPracticalExperience({...practicalExperience, position: e.target.value})
    }
    function handleResponsibilitiesChange(e) {
        setPracticalExperience({...practicalExperience, responsibilities: e.target.value})
    }
    function handleDatesChange(e) {
        setPracticalExperience({...practicalExperience, dates: e.target.value})
    }
    function handleEditClick() {
        setEditing(true);
    }
    function handleSubmitClick() {
        setEditing(false);
    }

    return (
        <div className="practicalExperience">Practical Experience
             <br/>
            <div className={editing ? "practicalExperienceInput active" : "practicalExperienceInput inactive"}>
            <TextInput 
                label="Company: "
                placeholder="Company Name"
                value={practicalExperience.company}
                onChange={handleCompanyChange}                
            />
            </div>
            <div className={editing ? "practicalExperienceInput active" : "practicalExperienceInput inactive"}>
            <TextInput 
                label="Position: "
                placeholder="Position Title"
                value={practicalExperience.position}
                onChange={handlePositionChange}                
            />
            </div>
            <div className={editing ? "practicalExperienceInput active" : "practicalExperienceInput inactive"}>
            <TextInput 
                label="Responsibilities: "
                placeholder="Main responsibilities"
                value={practicalExperience.responsibilities}
                onChange={handleResponsibilitiesChange}                
            />
            </div>
            <div className={editing ? "practicalExperienceInput active" : "practicalExperienceInput inactive"}>
            <TextInput 
                label="Dates: "
                placeholder="Period of Employment"
                value={practicalExperience.dates}
                onChange={handleDatesChange}                
            />
            </div>
            <div className={editing ? "practicalExperienceText inactive" : "practicalExperienceText active"}>{practicalExperience.company}</div>
            <div className={editing ? "practicalExperienceText inactive" : "practicalExperienceText active"}>{practicalExperience.position}</div>
            <div className={editing ? "practicalExperienceText inactive" : "practicalExperienceText active"}>{practicalExperience.responsibilities}</div>
            <div className={editing ? "practicalExperienceText inactive" : "practicalExperienceText active"}>{practicalExperience.dates}</div>
            <Buttons 
            name="Edit"
            onClick={handleEditClick}
            />
             <Buttons 
             name="Submit"
            onClick={handleSubmitClick}
            />
        
        </div>
    )
}