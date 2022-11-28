import { FaMoon, FaSun } from 'react-icons/fa';

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
                <FaMoon color="pink" />
                <FaSun color="yellow" />
                <div className="ball" />
            </label>
        </div>
    );
}
