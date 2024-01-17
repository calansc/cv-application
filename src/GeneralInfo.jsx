
import TextInput from "./CustomInput"
import EditButton from "./EditButton";
import { useState } from "react"

export default function GeneralInfo() {
    const [generalInfo, setGeneralInfo] = useState({fullName:'', email:'', phone:''});
    function handleFullNameChange(e) {
        setGeneralInfo({...generalInfo, fullName: e.target.value});
    }
    function handleEmailChange(e) {
        setGeneralInfo({...generalInfo, email: e.target.value})
    }
    function handlePhoneChange(e) {
        setGeneralInfo({...generalInfo, phone: e.target.value})
    }

    return (
        <div className="generalInfo">General Info
            <br/>
            <TextInput 
                label="Name: "
                placeholder="Your Name"
                value={generalInfo.fullName}
                onChange={handleFullNameChange}                
            />
            <br/>
            <TextInput 
                label="Email: "
                placeholder="Your@Email.com"
                value={generalInfo.email}
                onChange={handleEmailChange}                
            />
            <br/>
            <TextInput 
                label="Name: "
                placeholder="555-555-5555"
                value={generalInfo.phone}
                onChange={handlePhoneChange}                
            />
            <div>{generalInfo.fullName}</div>
            <div>{generalInfo.email}</div>
            <div>{generalInfo.phone}</div>
            <EditButton />
        </div>
    )
}