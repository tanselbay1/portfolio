export default function ThemeToggle({ toggle }) {
    const handleToggle = () => toggle();

    return (
        <div className="checkbox__container">
            <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                onClick={handleToggle}
            />
            <label htmlFor="checkbox" className="label">
                <i className="fas fa-moon" />
                <i className="fas fa-sun" />
                <div className="ball" />
            </label>
        </div>
    );
}
