import { ColumnFullHeightLayout } from 'src/components/Layout/Layout';
import { Typography } from 'src/components/Typography/Typography';
import FirstNumber from 'src/assets/png/processOfWorking/desktop/01.svg';
import FirstNumberMob from 'src/assets/png/processOfWorking/mob/01.svg';
import SecondNumberMob from 'src/assets/png/processOfWorking/mob/02.svg';
import ThirdNumberMob from 'src/assets/png/processOfWorking/mob/03.svg';
import FourthNumberMob from 'src/assets/png/processOfWorking/mob/04.svg';
import FifthNumberMob from 'src/assets/png/processOfWorking/mob/05.svg';
import SecondNumber from 'src/assets/png/processOfWorking/desktop/02.svg';
import ThirdNumber from 'src/assets/png/processOfWorking/desktop/03.svg';
import FourthNumber from 'src/assets/png/processOfWorking/desktop/04.svg';
import FifthNumber from 'src/assets/png/processOfWorking/desktop/05.svg';
import styles from './LandingWorkingProcess.module.css';
import { Button } from 'src/components/Button/Button';
import RightArrowIcon from 'src/assets/svg/arrowRight.svg';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const LandingWorkingProcess = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <ColumnFullHeightLayout
            wrapperMix={styles.mainWrapper}
            columnClassName={styles.columnWrapper}
        >
            <div className={styles.textHeader}>
                {isMobile ? (
                        <Typography tag='h3' className={styles.typography}>
                            The process of <br/> working with us
                        </Typography>
                ) : (
                    <><Typography tag='h1' className={styles.typography}>
                        The process
                    </Typography><Typography tag='h1' className={styles.typography}>
                        of working
                    </Typography><Typography tag='h1' className={styles.typography}>
                        with us
                    </Typography></>
                )}
            </div>

            <div className={styles.mainContentWrapper}>
                <div className={styles.numbersContainer}>
                    <div>
                        {isMobile ?
                            <FirstNumberMob /> :
                            <FirstNumber />
                        }
                    </div>
                    <div className={styles.numbersBody}>
                        <Typography tag="h3" className={styles.numbersTypography}>
                            Contract
                        </Typography>
                        <div className={styles.firstDescWrapper}>
                            <div className={styles.firstDescCircleWrapper}>
                                <div className={styles.firstDescCircle} />
                                <div className={styles.firstDescLine}/>
                                <div className={styles.firstDescCircle}/>
                                <div className={styles.firstDescLine}/>
                                <div className={styles.firstDescCircle}/>
                                <div className={styles.firstDescLine}/>
                                <div className={styles.firstDescCircle} />
                            </div>
                            <div className={styles.descWrapper}>
                                <p className={styles.descWrapperText} style={{ marginBottom: '1px' }}>Application review </p>
                                <p className={styles.descWrapperText}>Consultation with the customer</p>
                                <p className={styles.descWrapperText}>Contract signing</p>
                                <p className={styles.descWrapperText}>Getting started</p>
                            </div>
                        </div>
                        <div className={styles.accentNumbers}>
                            1-3 days
                        </div>
                    </div>
                </div>
                <div className={styles.numbersContainer}>
                    <div>
                        {isMobile ?
                            <SecondNumberMob /> :
                            <SecondNumber />
                        }
                    </div>
                    <div className={styles.numbersBody}>
                        <Typography tag="h3" className={styles.numbersTypography}>
                            Design
                        </Typography>
                        <p className={styles.descWrapperText}>
                            Unless its a fork of a small dApp, <br /> design takes at least 4 weeks. We <br /> craft a logo, a beautiful landing <br /> page and inner screens of your <br /> dApp.
                        </p>
                        <div className={styles.accentNumbers}>
                            1-3 week
                        </div>
                    </div>
                </div>
                <div className={styles.numbersContainer}>
                    <div>
                        {isMobile ?
                            <ThirdNumberMob /> :
                            <ThirdNumber />
                        }
                    </div>
                    <div className={styles.numbersBody}>
                        <Typography tag="h3" className={styles.numbersTypography}>
                            Smart <br /> Contract Development
                        </Typography>
                        <p className={styles.descWrapperText}>
                            Using the design as reference, <br/> we use industry-leading practices for <br/> writing smart contracts with a focus <br/> on simplicity, completeness and <br/> security.
                        </p>
                        <div className={styles.accentNumbers}>
                            2-4 week
                        </div>
                    </div>
                </div>
                {!isMobile && <div>
                    <Button
                        size="s"
                        theme="white"
                        buttonType="filled"
                        className={styles.button}
                    >
                        <Typography tag="p" styles={{ color: '#000' }}>
                            Send your application
                        </Typography>
                        <RightArrowIcon />
                    </Button>
                </div>}
                <div className={styles.numbersContainer}>
                    <div>
                        {isMobile ?
                            <FourthNumberMob /> :
                            <FourthNumber />
                        }
                    </div>
                    <div className={styles.numbersBody}>
                        <Typography tag="h3" className={styles.numbersTypography}>
                            Testnet <br /> Deployment
                        </Typography>
                        <p className={styles.descWrapperText}>
                            The release candidate is deployed <br />
                            on a Testnet and you initate your 2 <br />
                            week UAT process. Any bugs <br />
                            discovered are fixed in real time.
                        </p>
                        <div className={styles.accentNumbers}>
                            2-4 week
                        </div>
                    </div>
                </div>
                <div className={styles.numbersContainer}>
                    <div>
                        {isMobile ?
                            <FifthNumberMob /> :
                            <FifthNumber />
                        }
                    </div>
                    <div className={styles.numbersBody}>
                        <Typography tag="h3" className={styles.numbersTypography}>
                            Mainnet <br/>  Deployment
                        </Typography>
                        <p className={styles.descWrapperText}>
                            You would often want to reach <br />
                            specific marketing/fundraising <br />
                            milestones before mainnet launch. <br />
                            We wait for your signal before <br />
                            deploying the dApp on the mainnet.
                        </p>
                    </div>
                </div>
            </div>
            {isMobile &&
                <div>
                    <Button
                        size="s"
                        theme="white"
                        buttonType="filled"
                        className={styles.button}
                    >
                        <Typography tag="p" styles={{ color: '#000' }}>
                            Send your application
                        </Typography>
                        <RightArrowIcon />
                    </Button>
                </div>
            }
        </ColumnFullHeightLayout>
    );
};
