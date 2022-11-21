// Hamburger Menu Icons
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

import ThemeToggle from './ThemeToggle';

export function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen((prevState) => !prevState);
    };

    const menu = (
        <ul className="menu">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
        </ul>
    );

    return (
        <div className="header__container">
            <h3 className="logo">
                NAME <span className="surname">SURNAME</span>
            </h3>
            <nav>
                <button type="button" onClick={handleToggle}>
                    {navbarOpen ? (
                        <MdClose
                            style={{
                                color: '#fff',
                                backgroundColor: '#181a1b',
                                height: '30px',
                                width: '30px',
                            }}
                        />
                    ) : (
                        <FiMenu
                            style={{
                                color: '#fff',
                                backgroundColor: '#181a1b',
                                height: '30px',
                                width: '30px',
                            }}
                        />
                    )}
                </button>
                {navbarOpen && menu}
                {navbarOpen && <ThemeToggle />}
            </nav>
        </div>
    );
}
