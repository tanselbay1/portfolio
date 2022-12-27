export default function Button({ value, icon, goTo }) {
    return (
        <a
            href={goTo}
            type="button"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
        >
            {icon}
            {value}
        </a>
    );
}
