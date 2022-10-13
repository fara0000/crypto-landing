import React from 'react';
import styles from './Burger.module.css';
import Logo from 'src/assets/svg/mobileLogo.svg';
import CloseIcon from 'src/assets/svg/mobileCloseIcon.svg';
import { Typography } from 'src/components/Typography/Typography';
import Link from 'next/link';
import { Routes } from 'src/config/routes';

export const Burger = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerWrapper}>
                <Logo />
                <CloseIcon />
            </div>
            <div className={styles.mainBody}>
                <Link href={Routes.About}>
                    <a className={styles.link}>
                        <Typography tag='h5' className={styles.typography}>
                            About Snow
                        </Typography>
                    </a>
                </Link>
                <Link href={Routes.Services}>
                    <a className={styles.link}>
                        <Typography tag='h5' className={styles.typography}>
                            Services
                        </Typography>
                    </a>
                </Link>
                <Link href={Routes.Library}>
                    <a className={styles.link}>
                        <Typography tag='h5' className={styles.typography}>
                            Library
                        </Typography>
                    </a>
                </Link>
                <Link href={Routes.Team}>
                    <a className={styles.link}>
                        <Typography tag='h5' className={styles.typography}>
                            Team
                        </Typography>
                    </a>
                </Link>
                <Link href={Routes.Contact}>
                    <a className={styles.link}>
                        <Typography tag='h5' className={styles.typography}>
                            Contact us
                        </Typography>
                    </a>
                </Link>
            </div>
            {/*<div className={styles.footer}></div>*/}
        </div>
    )
}