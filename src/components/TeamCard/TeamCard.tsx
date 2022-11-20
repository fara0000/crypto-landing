import DaoMob from 'src/assets/svg/library/mob/dao.svg';
import Dao from 'src/assets/svg/library/desc/dao.svg';
import { Typography } from 'src/components/Typography/Typography';
import { FC, ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useMediaQuery } from 'react-responsive';
import styles from './TeamCard.module.css';

type Props = {
    title: string;
    desc: string;
    image: string | StaticImageData;
};

export const TeamCard: FC<Props> = ({ desc, title, image }) => {
    return (
        <div className={styles.cardWrapper}>
            <Image src={image} alt="team card is loading..." />
            <Typography tag="h5" className={styles.title}>
                {title}
            </Typography>
            <span className={styles.text}>
                {desc}{' '}
                <span style={{ color: '#05EBFF', cursor: 'pointer' }}>
                    MORE
                </span>
            </span>
        </div>
    );
};
