import { useState } from "react";
import TextInput from "./CustomInput";
import Buttons from "./Buttons";

export default function PracticalExperience() {
    const [practicalExperience, setPracticalExperience] = useState({company:'', position:'', responsibilities:'', dateStart:'', dateEnd:''});
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
    function handleDateStartChange(e) {
        setPracticalExperience({...practicalExperience, dateStart: e.target.value})
    }
    function handleDateEndChange(e) {
        setPracticalExperience({...practicalExperience, dateEnd: e.target.value})
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
                label="Start Date: "
                type="month"
                placeholder="Period of Employment"
                value={practicalExperience.dateStart}
                onChange={handleDateStartChange}                
            />
            </div>
            <div className={editing ? "practicalExperienceInput active" : "practicalExperienceInput inactive"}>
            <TextInput 
                label="End Date: "
                type="month"
                placeholder="Period of Employment"
                value={practicalExperience.dateEnd}
                onChange={handleDateEndChange}                
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