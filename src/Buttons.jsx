export default function Buttons({onClick, name}) {
    return (
        <button
        onClick={onClick}
        >
        {name}
        </button>
    )
}