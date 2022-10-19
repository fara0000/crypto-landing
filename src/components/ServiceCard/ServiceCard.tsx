import React, { ReactNode } from 'react';
import RightArrow from 'src/assets/svg/arrowRight.svg';
import { Typography } from 'src/components/Typography/Typography';
import styles from './ServiceCard.module.css';

type Props = {
    icon: ReactNode;
    title: any;
};

export const ServiceCard: React.FC<Props> = ({ icon, title }) => {
    return (
        <div className={styles.cardWrapper}>
            {icon}
            <Typography tag="h4" className={styles.title}>
                {title}
            </Typography>
            <div className={styles.cardLinkWrapper}>
                <span className={styles.linkText}>Learn more</span>
                <RightArrow style={{ stroke: 'black' }} />
            </div>
        </div>
    );
};
