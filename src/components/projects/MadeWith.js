import { Icon } from '@iconify/react';

export default function MadeWith({ techList }) {
    const iconList = techList.map((tech) => {
        let icon = null;
        switch (tech) {
            case 'html':
                icon = 'vscode-icons:file-type-html';
                break;
            case 'css':
                icon = 'vscode-icons:file-type-css';
                break;
            case 'javascript':
                icon = 'logos:javascript';
                break;
            case 'react':
                icon = 'vscode-icons:file-type-reactjs';
                break;
            case 'scss':
                icon = 'vscode-icons:file-type-sass';
                break;
            case 'framer-motion':
                icon = 'ph:framer-logo-duotone';
                break;
            default:
                break;
        }

        return (
            <li key={Math.random()}>
                <Icon icon={icon} inline="true" />
            </li>
        );
    });

    return <ul className="icons">{iconList}</ul>;
}
