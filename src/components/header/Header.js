// Hamburger Menu Icons
import { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
import NavMenu from './NavMenu';

export function Header() {
    // If theme state is false, app is on dark mode.
    const [theme, setTheme] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen((prevState) => !prevState);
    };

    const handleThemeToggle = () => {
        setTheme((prevState) => !prevState);
    };

    useEffect(() => {
        document.body.classList.toggle('light');
    }, [theme]);

    return (
        <header>
            <div className="header__container">
                <h3 className="logo">
                    NAME <span className="surname">SURNAME</span>
                </h3>
                <nav className="nav">
                    <motion.div whileTap={{ scale: 0.8 }}>
                        <button type="button" onClick={handleToggle}>
                            {/* Toggle between hamburger menu icons */}
                            {navbarOpen ? <MdClose /> : <FiMenu />}
                        </button>
                    </motion.div>
                </nav>
            </div>
            <NavMenu
                isOpen={navbarOpen}
                onThemeChange={handleThemeToggle}
                theme={theme}
            />
        </header>
    );
}
