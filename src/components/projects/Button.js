export default function Button({ value, icon }) {
    return (
        <button type="button" className="project-btn">
            {icon}
            {value}
        </button>
    );
}
