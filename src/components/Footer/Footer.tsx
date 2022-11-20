import React from 'react';
import styles from './Footer.module.css';
import { Typography } from 'src/components/Typography/Typography';
import Telegram from 'src/assets/svg/telegram.svg';
import Link from 'next/link';
import { Routes } from 'src/config/routes';
import Image from 'next/image';
import Snow from 'src/assets/png/SNØW.png';
import Bg from 'src/assets/png/footerBackground.png';
import { ColumnFullHeightLayout } from 'src/components/Layout/Layout';
import { useMediaQuery } from 'react-responsive';

export const Footer = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <ColumnFullHeightLayout
            wrapperMix={styles.mainWrapper}
            columnClassName={styles.columnWrapper}
        >
            <div className={styles.footer}>
                <div className={styles.firstFooterBlock}>
                    <div className={styles.addressWrapper}>
                        <Typography tag={'span'} styles={{ opacity: 0.3 }}>
                            Connect
                        </Typography>
                        <Typography tag={'p'} styles={isMobile ?  { width: '288px', marginTop: '16px' } : { width: '508px', marginTop: '20px' }}>
                            Level 11, Boulevard Plaza Tower One -
                            Sheikh Mohammed bin Rashid Blvd
                            - Downtown Dubai - Dubai - United Arab Emirates
                        </Typography>
                        <div className={styles.tgContainer}>
                            <div className={styles.telegramWrapper}>
                                <Telegram />
                            </div>
                            <Typography tag={'span'}>
                                Telegram
                            </Typography>
                        </div>
                    </div>
                    <div className={styles.linkAndPrivacyContainer}>
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
                        </div>
                        <Typography tag={'span'} styles={{ opacity: 0.3 }}>
                            Privacy Policy
                        </Typography>
                    </div>
                </div>
                <div className={styles.secondFooterBlock}>
                    <Typography tag={'p'}>
                        2022 © Snow
                    </Typography>
                    <div className={styles.snowFooterContainer}>
                        <div className={styles.background}>
                            <Image src={Bg} alt="Bg is loading..."/>
                        </div>
                        <Image src={Snow} alt="Snow is loading..."/>
                    </div>
                </div>
            </div>
        </ColumnFullHeightLayout>
    );
};