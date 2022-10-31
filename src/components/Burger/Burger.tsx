import React from 'react';
import Logo from 'src/assets/svg/mobileLogo.svg';
import CloseIcon from 'src/assets/svg/mobileCloseIcon.svg';
import RightArrowIcon from 'src/assets/svg/arrowRight.svg';
import { Typography } from 'src/components/Typography/Typography';
import Link from 'next/link';
import SnowTextIcon from 'src/assets/svg/SNOW.svg';
import { Routes } from 'src/config/routes';
import { Button } from 'src/components/Button/Button';
import Telegram from 'src/assets/svg/telegram.svg';
import styles from './Burger.module.css';

export type BurgerButtonProps = {
    setBurger: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Burger: React.FC<BurgerButtonProps> = ({ setBurger }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerWrapper}>
                <div className={styles.logoWrapper}>
                    <Logo />
                </div>
                <div
                    role="presentation"
                    className={styles.closeWrapper}
                    onClick={() => setBurger(false)}
                    onKeyDown={() => setBurger(false)}
                >
                    <CloseIcon />
                </div>
            </div>
            <div className={styles.mainBody}>
                <Link href={Routes.About}>
                    <a className={styles.link} href={Routes.About}>
                        <Typography tag="h5" className={styles.typography}>
                            About Snow
                        </Typography>
                    </a>
                </Link>
                <Link href={Routes.Services}>
                    <a className={styles.link} href={Routes.Services}>
                        <Typography tag="h5" className={styles.typography}>
                            Services
                        </Typography>
                    </a>
                </Link>
                <Link href={Routes.Library}>
                    <a className={styles.link} href={Routes.Library}>
                        <Typography tag="h5" className={styles.typography}>
                            Library
                        </Typography>
                    </a>
                </Link>
                <Link href={Routes.Team}>
                    <a className={styles.link} href={Routes.Team}>
                        <Typography tag="h5" className={styles.typography}>
                            Team
                        </Typography>
                    </a>
                </Link>
                <Link href={Routes.Contact}>
                    <a className={styles.link} href={Routes.Contact}>
                        <Typography tag="h5" className={styles.typography}>
                            Contact us
                        </Typography>
                    </a>
                </Link>
                <Button
                    size="s"
                    theme="white"
                    buttonType="filled"
                    className={styles.button}
                >
                    <Typography tag="p" styles={{ color: '#000' }}>
                        Send your application
                    </Typography>
                    <RightArrowIcon stroke="#000" />
                </Button>
            </div>
            <div className={styles.footer}>
                <div className={styles.telegramWrapper}>
                    <Telegram height="19px" width="21px" />
                </div>
                <SnowTextIcon />
                {/* <Typography tag='h2' className={styles.logoName}> */}
                {/*    SNØW */}
                {/* </Typography> */}
            </div>
        </div>
    );
};
