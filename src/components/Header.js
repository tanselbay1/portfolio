export default function Header() {
    return (
        <div className="header__container">
            <nav>
                <h3 className="logo">
                    Name <span>Surname</span>
                </h3>
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
            </nav>
        </div>
    );
}
