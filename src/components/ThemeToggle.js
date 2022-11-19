export default function ThemeToggle() {
    return (
        <div className="checkbox__container">
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label">
                <i className="fas fa-moon" />
                <i className="fas fa-sun" />
                <div className="ball" />
            </label>
        </div>
    );
}
