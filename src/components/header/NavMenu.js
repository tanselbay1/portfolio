import { motion, AnimatePresence } from 'framer-motion';
import { IoHome } from 'react-icons/io5';
import { HiUser } from 'react-icons/hi';
import { FaTools, FaCodepen } from 'react-icons/fa';
import ThemeToggle from '../ThemeToggle';

export default function NavMenu({
    isOpen = true,
    onThemeChange,
    toggleLocation,
    theme,
}) {
    const handleToggle = () => {
        onThemeChange();
    };

    const menu = (
        <ul className="menu">
            <li>
                <a href="#home" className="nav-menu-link">
                    <IoHome />
                    Home
                </a>
            </li>
            <li>
                <a href="#about" className="nav-menu-link">
                    <HiUser />
                    About
                </a>
            </li>
            <li>
                <a href="#skills" className="nav-menu-link">
                    <FaTools />
                    Skills
                </a>
            </li>
            <li>
                <a href="#projects" className="nav-menu-link">
                    <FaCodepen />
                    Projects
                </a>
            </li>
        </ul>
    );

    return (
        <div className="nav-menu">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="motionMenu"
                        initial={{ x: '30vw', opacity: 0, scale: 0.5 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        exit={{ x: '30vw', opacity: 0, scale: 0.5 }}
                    >
                        {menu}
                    </motion.div>
                )}
                {isOpen && (
                    <motion.div
                        key="themeToggle"
                        initial={{ x: '30vw', opacity: 0, scale: 0.5 }}
                        animate={
                            toggleLocation
                                ? { x: -130, opacity: 1, scale: 1 }
                                : { x: '165%', opacity: 1, scale: 1 }
                        }
                        transition={{ duration: 0.5 }}
                        exit={{ x: '30vw', opacity: 0, scale: 0 }}
                    >
                        <ThemeToggle
                            toggle={handleToggle}
                            isThemeDark={theme}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
