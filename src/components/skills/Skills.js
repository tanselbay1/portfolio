import SectionHeader from '../UI/SectionHeader';
import Skill from './Skill';

const languagesIcon = 'heroicons:code-bracket';
const librariesFrameworksIcon = 'fa-solid:book-reader';
const technologiesIcon = 'mdi:tools';

const languages = [
    { title: 'javascript', icon: 'logos:javascript' },
    { title: 'html', icon: 'vscode-icons:file-type-html' },
    { title: 'css', icon: 'vscode-icons:file-type-css' },
];

const librariesFrameworks = [
    { title: 'react', icon: 'vscode-icons:file-type-reactjs' },
    { title: 'sass', icon: 'vscode-icons:file-type-sass' },
    { title: 'framer-motion', icon: 'ph:framer-logo-duotone' },
];

const technologies = [
    { title: 'git', icon: 'mdi:git' },
    { title: 'webpack', icon: 'logos:webpack' },
    { title: 'netlify', icon: 'vscode-icons:file-type-netlify' },
    { title: 'trello', icon: 'logos:trello' },
];

export default function Skills() {
    return (
        <section id="section">
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
