import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function BackToTop() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        });
    }, []);

    if (showBackToTop) {
        return (
            <motion.div
                className="back-to-top"
                drag
                dragConstraints={{ left: 4, right: 4, top: 4, bottom: 4 }}
                whileTap={{ scale: 1.1 }}
                whileHover={{ rotate: 360 }}
                transition={{
                    rotate: { duration: 1 },
                    scale: { duration: 0.2 },
                }}
                onClick={() => window.scrollTo(0, 0)}
            >
                <Icon icon="material-symbols:arrow-circle-up-rounded" />
            </motion.div>
        );
    }
}
