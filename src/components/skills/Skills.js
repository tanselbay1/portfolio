import SectionHeader from '../UI/SectionHeader';
import Skill from './Skill';

// Iconify icons for Headers
const languagesIcon = 'mingcute:code-fill';

const librariesFrameworksIcon = 'fa-solid:book-reader';
const technologiesIcon = 'mdi:tools';

const languages = [
    { title: 'Javascript', icon: 'logos:javascript' },
    { title: 'Html', icon: 'vscode-icons:file-type-html' },
    { title: 'Css', icon: 'vscode-icons:file-type-css' },
];

const librariesFrameworks = [
    { title: 'React', icon: 'vscode-icons:file-type-reactjs' },
    { title: 'Sass', icon: 'vscode-icons:file-type-sass' },
    { title: 'Framer-Motion', icon: 'ph:framer-logo-duotone' },
];

const technologies = [
    { title: 'Git', icon: 'mdi:git' },
    { title: 'Webpack', icon: 'logos:webpack' },
    { title: 'Netlify', icon: 'vscode-icons:file-type-netlify' },
    { title: 'Trello', icon: 'logos:trello' },
];

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div className="header">
                    <SectionHeader title="My" span="Skills" />
                </div>
                <div className="skills">
                    <Skill
                        header="Languages"
                        headerIcon={languagesIcon}
                        items={languages}
                    />
                    <Skill
                        header="Libraries/Frameworks"
                        headerIcon={librariesFrameworksIcon}
                        items={librariesFrameworks}
                    />
                    <Skill
                        header="Technologies"
                        headerIcon={technologiesIcon}
                        items={technologies}
                    />
                </div>
            </div>
        </section>
    );
}
