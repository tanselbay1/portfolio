import Project from './Project';

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <div className="header">
                    <h2 className="title">
                        My
                        <span className="coloured"> Projects</span>
                    </h2>
                </div>
                <div className="projects-wrapper">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </section>
    );
}
