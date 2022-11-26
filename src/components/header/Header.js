import { useState, useEffect } from 'react';

// Hamburger Menu Icons
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

import { motion } from 'framer-motion';
import useWindowSize from 'hooks/useWindowSize';
import NavMenu from './NavMenu';

export function Header() {
    // If theme state is false, app is on dark mode.
    const [theme, setTheme] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);

    // Get window size with useWindowSize custom hook
    const windowSize = useWindowSize();
    const isMobile = windowSize.width < 768;
    // const isTablet = windowSize.width < 1024;
    // const isDesktop = windowSize.width >= 1024;

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
                    {/* Show hamburger menu button on medium and small screens */}
                    {isMobile && (
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <button type="button" onClick={handleToggle}>
                                {/* Toggle between hamburger menu icons */}
                                {navbarOpen ? <MdClose /> : <FiMenu />}
                            </button>
                        </motion.div>
                    )}
                    {!isMobile && (
                        <NavMenu
                            onThemeChange={handleThemeToggle}
                            theme={theme}
                        />
                    )}
                </nav>
            </div>
            {isMobile && (
                <NavMenu
                    isOpen={navbarOpen}
                    onThemeChange={handleThemeToggle}
                    theme={theme}
                />
            )}
        </header>
    );
}
