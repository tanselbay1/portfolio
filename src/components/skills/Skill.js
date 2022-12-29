import { Icon } from '@iconify/react';

export default function Skill({ header, headerIcon, items }) {
    return (
        <div className="skill">
            <Icon icon={headerIcon} color="hsl(356, 74%, 60%)" />
            <h2 className="skill-header">{header}</h2>
            <ul className="items">
                {items.map((item) => (
                    <li>
                        {item.title}
                        <Icon icon={item.icon} inline="true" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
