import { useState } from "react";
import TextInput from "./CustomInput";
import Buttons from "./Buttons";

export default function Education() {
    const [education, setEducation] = useState({school:'', degree:'', dates:''});
    const [editing, setEditing] = useState(true);
    function handleSchoolChange(e) {
        setEducation({...education, school: e.target.value});
    }
    function handleDegreeChange(e) {
        setEducation({...education, degree: e.target.value})
    }
    function handleDatesChange(e) {
        setEducation({...education, dates: e.target.value})
    }
    function handleEditClick() {
        setEditing(true);
    }
    function handleSubmitClick() {
        setEditing(false);
    }

    return (
        <div className="education">Education
             <br/>
            <div className={editing ? "educationInput active" : "educationInput inactive"}>
            <TextInput 
                label="School: "
                placeholder="School Name"
                value={education.school}
                onChange={handleSchoolChange}                
            />
            </div>
            <div className={editing ? "educationInput active" : "educationInput inactive"}>
            <TextInput 
                label="Degree: "
                placeholder="Degree / Area of Study"
                value={education.degree}
                onChange={handleDegreeChange}                
            />
            </div>
            <div className={editing ? "educationInput active" : "educationInput inactive"}>
            <TextInput 
                className="educationInput"
                label="Dates: "
                placeholder="Dates in School"
                value={education.dates}
                onChange={handleDatesChange}                
            />
            </div>
            <div className={editing ? "educationText inactive" : "educationText active"}>{education.school}</div>
            <div className={editing ? "educationText inactive" : "educationText active"}>{education.degree}</div>
            <div className={editing ? "educationText inactive" : "educationText active"}>{education.dates}</div>
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