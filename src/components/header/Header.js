import { useState, useEffect, useLayoutEffect, useRef } from 'react';

// Hamburger Menu Icons
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

import { motion } from 'framer-motion';
import useWindowSize from '../../hooks/useWindowSize';
import NavMenu from './NavMenu';

export function Header() {
    // If theme state is false, app is on dark mode.
    const [theme, setTheme] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const headerContainer = useRef(null);
    const logoSurname = useRef(null);

    // Get window size with useWindowSize custom hook
    const windowSize = useWindowSize();
    const isMobile = windowSize.width < 1024;

    const initialRender = useRef(true);

    const handleToggle = () => {
        setNavbarOpen((prevState) => !prevState);
    };

    const handleThemeToggle = () => {
        setTheme((prevState) => !prevState);
    };

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            document.body.classList.toggle('light');
        }
    }, [theme]);

    useLayoutEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 0;
            if (isScrolling) {
                headerContainer.current.classList.add('scrolling');
                logoSurname.current.classList.add('logo-surname');
            }
            if (!isScrolling) {
                headerContainer.current.classList.remove('scrolling');
                logoSurname.current.classList.remove('logo-surname');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="home">
            <div ref={headerContainer} className="header__container">
                <h2 className="logo">
                    TANSEL{' '}
                    <span ref={logoSurname} className="surname">
                        BAYRAKTAROGLU
                    </span>
                </h2>
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
                            toggleLocation={isMobile}
                        />
                    )}
                </nav>
            </div>
            {isMobile && (
                <NavMenu
                    isOpen={navbarOpen}
                    onThemeChange={handleThemeToggle}
                    theme={theme}
                    toggleLocation={isMobile}
                />
            )}
        </header>
    );
}
