import { FaEye, FaCode } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import Button from './Button';

export default function Project() {
    return (
        <div className="project">
            <div className="project-img" />
            <div className="project-text">
                <h2 className="project-header">TODO App</h2>
                <p className="description">
                    A classic todo app with a dark/light theme implementation
                </p>
                <div className="made-width">
                    <p>Made With:</p>
                    <ul className="icons">
                        <li>
                            <Icon
                                icon="vscode-icons:file-type-html"
                                inline="true"
                            />
                        </li>
                        <li>
                            <Icon
                                icon="vscode-icons:file-type-css"
                                inline="true"
                            />
                        </li>
                        <li>
                            <Icon icon="logos:javascript" inline="true" />
                        </li>
                        <li>
                            <Icon
                                icon="vscode-icons:file-type-reactjs"
                                inline="true"
                            />
                        </li>
                    </ul>
                </div>
                <p className="build-date">December 2022</p>
            </div>
            <div className="project-buttons">
                <Button value="demo" icon={<FaEye />} />
                <Button value="code" icon={<FaCode />} />
            </div>
        </div>
    );
}
