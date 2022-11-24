import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const typedElement = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Coder', 'Programmer', 'Developer'],
            startDelay: 300,
            typeSpeed: 150,
            backSpeed: 100,
            loop: true,
        };

        typedInstance.current = new Typed(typedElement.current, options);

        return () => typedInstance.current.destroy();
    }, []);

    return (
        <div className="hero-container">
            <h1 className="title">
                Hi, I'm a{' '}
                <span ref={typedElement} className="animated-text">
                    Coder
                </span>
            </h1>
            <h2 className="sub-title">
                Full-time student with passion for web development
            </h2>
            <div className="btn-group">
                <a href="#about" className="btn btn-red-border">
                    About me
                </a>
                <a href="#projects" className="btn btn-blue">
                    Projects
                </a>
            </div>
        </div>
    );
}
