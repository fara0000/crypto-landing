import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import RightArrow from 'src/assets/svg/arrowRight.svg';
import { Typography } from 'src/components/Typography/Typography';
import { ServiceCardType } from 'src/utils/serviceData';
import styles from './ServiceCard.module.css';

type Props = {
    card: ServiceCardType;
    icon: ReactNode;
    title: string;
    setCard: Dispatch<SetStateAction<ServiceCardType>>;
};

export const ServiceCard: React.FC<Props> = ({
    card,
    icon,
    title,
    setCard,
}) => {
    return (
        <div className={styles.cardWrapper}>
            {icon}
            <Typography tag="h4" className={styles.title}>
                {title}
            </Typography>
            <div
                className={styles.cardLinkWrapper}
                onClick={() => setCard(card)}
            >
                <span className={styles.linkText}>Learn more</span>
                <RightArrow />
            </div>
        </div>
    );
};
