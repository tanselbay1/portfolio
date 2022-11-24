export default function Hero() {
    return (
        <div className="hero-container">
            <h1 className="title">
                Hi, I'm a <span className="animated-text">coder.|</span>
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
