import { Icon } from '@iconify/react';
import { v4 as uniqueID } from 'uuid';
import { motion } from 'framer-motion';

export default function Skill({ header, headerIcon, items }) {
    return (
        <div className="skill-container">
            <motion.div whileHover={{ y: -10 }}>
                <div className="skill">
                    <Icon
                        icon={headerIcon}
                        className="header-icon"
                        color="hsl(356, 74%, 60%)"
                    />
                    <h2 className="skill-header">{header}</h2>
                    <ul className="items">
                        {items.map((item) => (
                            <li key={uniqueID()}>
                                {item.title}
                                <Icon icon={item.icon} inline="true" />
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            <div className="skill-background" />
        </div>
    );
}
