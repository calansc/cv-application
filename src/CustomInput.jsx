export default function TextInput({label, type, placeholder, value, onChange}) {
    return (
        <>
        <label>{label}</label>
         <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
        </>
       
    )
}