import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from 'src/assets/svg/logoSmall.svg';
import MobileMenuIcon from 'src/assets/svg/mobileBurgerIcon.svg';
import Telegram from 'src/assets/svg/telegram.svg';
import { Routes } from 'src/config/routes';
import { Typography } from 'src/components/Typography/Typography';
import { Burger } from 'src/components/Burger/Burger';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    const [isBurgerShown, setIsBurgerShown] = useState(false);

    useEffect(() => {
        document.body.style.overflowY = isBurgerShown ? 'hidden' : 'visible';
    }, [isBurgerShown]);

    return (
        <div
        // style={
        //     isMobile
        //         ? { overflow: 'auto', height: '100%', width: '100%' }
        //         : { width: '100%' }
        // }
        >
            {!isBurgerShown && (
                <header className={styles.wrapper}>
                    <Link href={Routes.Landing}>
                        <div className={styles.logoWrapper}>
                            <Logo />
                            <Typography tag="h3" className={styles.logoName}>
                                SNØW
                            </Typography>
                        </div>
                    </Link>
                    <div className={styles.linksWrapper}>
                        <Link href={Routes.About}>
                            <a className={styles.link}>
                                <Typography tag="span">About Snow</Typography>
                            </a>
                        </Link>
                        <Link href={Routes.Services}>
                            <a className={styles.link}>
                                <Typography tag="span">Services</Typography>
                            </a>
                        </Link>
                        <Link href={Routes.Library}>
                            <a className={styles.link}>
                                <Typography tag="span">Library</Typography>
                            </a>
                        </Link>
                        <Link href={Routes.Team}>
                            <a className={styles.link}>
                                <Typography tag="span">Team</Typography>
                            </a>
                        </Link>
                        <Link href={Routes.Contact}>
                            <a className={styles.link}>
                                <Typography tag="span">Contact us</Typography>
                            </a>
                        </Link>
                        <div className={styles.telegramWrapper}>
                            <Telegram />
                        </div>
                    </div>
                    <div
                        className={styles.mobileBurgerIconWrapper}
                        onClick={() => setIsBurgerShown(!isBurgerShown)}
                    >
                        <MobileMenuIcon />
                    </div>
                </header>
            )}
            {isBurgerShown && <Burger setBurger={setIsBurgerShown} />}
        </div>
    );
};
