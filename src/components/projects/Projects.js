import SectionHeader from '../UI/SectionHeader';
import Project from './Project';
import data from '../../data/projects-data.json';

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <div className="header">
                    <SectionHeader title="My" span="Projects" />
                </div>
                <div className="projects-wrapper">
                    {data.map((project) => (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            buildDate={project['build-date']}
                            imageSource={project.image}
                            madeWith={project['made-with']}
                            demo={project.demo}
                            code={project.code}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
