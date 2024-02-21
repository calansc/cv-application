import { useState } from "react";
import TextInput from "./CustomInput";
import Buttons from "./Buttons";

export default function Education() {
    const [education, setEducation] = useState({school:'', degree:'', date1:'', date2:''});
    const [editing, setEditing] = useState(true);
    function handleSchoolChange(e) {
        setEducation({...education, school: e.target.value});
    }
    function handleDegreeChange(e) {
        setEducation({...education, degree: e.target.value})
    }
    function handleDate1Change(e) {
        setEducation({...education, date1: e.target.value})
    }
    function handleDate2Change(e) {
        setEducation({...education, date2: e.target.value})
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
                label="Start Date: "
                type="month"
                placeholder="School Start date"
                value={education.date1}
                onChange={handleDate1Change}                
            />
            </div>
            <div className={editing ? "educationInput active" : "educationInput inactive"}>
            <TextInput 
                label="End Date: "
                type="month"
                placeholder="School End date"
                value={education.date2}
                onChange={handleDate2Change}                
            />
            </div>
            <div className={editing ? "educationText inactive" : "educationText active"}>{education.school}</div>
            <div className={editing ? "educationText inactive" : "educationText active"}>{education.degree}</div>
            <div className={editing ? "educationText inactive" : "educationText active"}>{education.date1}</div>
            <div className={editing ? "educationText inactive" : "educationText active"}>{education.date2}</div>
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