export default function TextInput({label, placeholder, value, onChange}) {
    return (
        <>
        <label>{label}</label>
         <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
        </>
       
    )
}