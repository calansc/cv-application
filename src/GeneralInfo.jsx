
import TextInput from "./CustomInput"
import Buttons from "./Buttons";
import './styles/GeneralInfo.css'
import { useState } from "react"

export default function GeneralInfo() {
    const [generalInfo, setGeneralInfo] = useState({fullName:'', email:'', phone:''});
    const [editing, setEditing] = useState(true);
    function handleFullNameChange(e) {
        setGeneralInfo({...generalInfo, fullName: e.target.value});
    }
    function handleEmailChange(e) {
        setGeneralInfo({...generalInfo, email: e.target.value})
    }
    function handlePhoneChange(e) {
        setGeneralInfo({...generalInfo, phone: e.target.value})
    }
    function handleEditClick() {
        setEditing(true);
    }
    function handleSubmitClick() {
        setEditing(false);
    }


    return (
        <div className="generalInfo">General Info
            <br/>
            <div className={editing ? "generalInfoInput active" : "generalInfoInput inactive"}>
            <TextInput 
                label="Name: "
                placeholder="Your Name"
                value={generalInfo.fullName}
                onChange={handleFullNameChange}                
            />
            </div>
            <div className={editing ? "generalInfoInput active" : "generalInfoInput inactive"}>
            <TextInput 
                label="Email: "
                type="email"
                placeholder="Your@Email.com"
                value={generalInfo.email}
                onChange={handleEmailChange}                
            />
            </div>
            <div className={editing ? "generalInfoInput active" : "generalInfoInput inactive"}>
            <TextInput 
                label="Phone: "
                type="tel"
                placeholder="555-555-5555"
                value={generalInfo.phone}
                onChange={handlePhoneChange}                
            />
            </div>
            <div className={editing ? "generalInfoText inactive" : "generalInfoText active"}>{generalInfo.fullName}</div>
            <div className={editing ? "generalInfoText inactive" : "generalInfoText active"}>{generalInfo.email}</div>
            <div className={editing ? "generalInfoText inactive" : "generalInfoText active"}>{generalInfo.phone}</div>
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