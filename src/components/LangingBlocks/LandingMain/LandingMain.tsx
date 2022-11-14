import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import logo from 'src/assets/png/megaBigLogo.png';
import logoMobile from 'src/assets/png/logoMobileTop.png';
import BlockChainTextImage from 'src/assets/png/blockchainText.png';
import SendApplicationImage from 'src/assets/png/sendApplicationImage.png';
import SendApplicationMobImage from 'src/assets/png/sendApplicationMobImage.png';
import { HeaderPageLayout } from 'src/components/Layout/Layout';
import { Typography } from 'src/components/Typography/Typography';
import styles from './LandingMain.module.css';

export const LandingMain = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1150px)' });

    return (
        <HeaderPageLayout columnClassName={styles.columnClassName}>
            <div className={styles.firstBlock}>
                <div className={styles.textInfoWrapper}>
                    <div className={styles.bigTextWrapper}>
                        <Typography
                            tag={isMobile ? 'h4' : 'h2'}
                            className={styles.typography}
                        >
                            Premium
                        </Typography>
                        {!isMobile && !isTablet ? (
                            <Image
                                src={BlockChainTextImage}
                                width={600}
                                height={91}
                                alt="image is loading..."
                            />
                        ) : (
                            <Typography
                                tag={isMobile || isTablet ? 'h4' : 'h2'}
                                className={styles.typography}
                            >
                                Blockchain
                            </Typography>
                        )}
                        <Typography
                            tag={isMobile || isTablet ? 'h4' : 'h2'}
                            className={styles.typography}
                        >
                            Development
                        </Typography>
                    </div>
                    <div className={styles.aboutText}>
                        <div className={styles.aboutTextFirstPart}>
                            {!isMobile && (
                                <div className={styles.figureWrapper}>
                                    <div className={styles.miniCircle} />
                                    <div className={styles.line} />
                                </div>
                            )}

                            <p className={styles.textTransform}>
                                We help
                                <span className={styles.colorfulText}>
                                    {' '}
                                    start-ups{' '}
                                </span>
                                and <br />
                                established companies
                            </p>
                        </div>
                        <div className={styles.aboutTextSecondPart}>
                            <p className={styles.textTransform}>
                                create and launch{' '}
                                <span className={styles.colorfulText}>
                                    {' '}
                                    high-end web3{' '}
                                </span>{' '}
                                <br />
                                products of{' '}
                                <span className={styles.colorfulText}>
                                    {' '}
                                    any complexity
                                </span>
                                . From <br />
                                product concept to implementation and <br />
                                ongoing{' '}
                                <span className={styles.colorfulText}>
                                    {' '}
                                    support.
                                </span>
                            </p>
                        </div>
                    </div>
                    {!isMobile && (
                        <div className={styles.mouseWrapper}>
                            <div className={styles.mouseScroll}>
                                <div>
                                    <div className={styles.mouseLine} />
                                </div>
                            </div>
                            <Typography tag="span">scroll</Typography>
                        </div>
                    )}
                    {isMobile && (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '20px',
                            }}
                        >
                            <Image
                                src={SendApplicationMobImage.src}
                                width={191}
                                height={191}
                                alt="image is loading..."
                                // blurDataURL={logo.src}
                            />
                        </div>
                    )}
                </div>

                <div className={styles.bigLogoImageWrapper}>
                    {!isMobile ? (
                        <Image
                            src={logo.src}
                            width={798}
                            height={713}
                            alt="big logo is loading..."
                            // blurDataURL={logo.src}
                        />
                    ) : (
                        <Image
                            src={logoMobile.src}
                            width={280}
                            height={251}
                            alt="big logo is loading..."
                            // blurDataURL={logo.src}
                        />
                    )}
                </div>
                {!isMobile && (
                    <div className={styles.sendApplicationImageWrapper}>
                        <Image
                            className={styles.sendApplicationImage}
                            src={SendApplicationImage.src}
                            width={268}
                            height={268}
                            alt="big logo is loading..."
                        />
                    </div>
                )}
            </div>
            <div className={styles.secondBlock}>
                <div className={styles.staticContainer}>
                    <Typography
                        tag={isMobile ? 'h3' : 'h1'}
                        className={styles.numbers}
                    >
                        320
                    </Typography>
                    <div className={styles.figureWrapper}>
                        {!isMobile && (
                            <div
                                className={styles.miniCircle}
                                style={{
                                    backgroundColor: '#05EBFF',
                                    border: '1px solid #05EBFF',
                                    marginRight: '10px',
                                }}
                            />
                        )}
                        <div
                            className={styles.line}
                            style={
                                isMobile
                                    ? { width: '100%' }
                                    : { width: '390px' }
                            }
                        />
                    </div>
                    <span className={styles.numbersText}>
                        of smart contracts
                    </span>
                </div>
                <div
                    className={styles.staticContainer}
                    style={!isMobile ? { marginTop: '53px' } : {}}
                >
                    <Typography
                        tag={isMobile ? 'h3' : 'h1'}
                        className={styles.numbers}
                    >
                        92
                    </Typography>
                    <div className={styles.figureWrapper}>
                        <div
                            className={styles.line}
                            style={
                                isMobile
                                    ? { width: '100%' }
                                    : { width: '400px' }
                            }
                        />
                    </div>
                    <span className={styles.numbersText}>
                        completed projects
                    </span>
                </div>
                <div
                    className={styles.staticContainer}
                    style={!isMobile ? { marginTop: '106px' } : {}}
                >
                    <Typography
                        tag={isMobile ? 'h3' : 'h1'}
                        className={styles.numbers}
                    >
                        21
                    </Typography>
                    <div className={styles.figureWrapper}>
                        <div
                            className={styles.line}
                            style={
                                isMobile
                                    ? { width: '100%' }
                                    : { width: '378px' }
                            }
                        />
                        {!isMobile && (
                            <div
                                className={styles.miniCircle}
                                style={{
                                    backgroundColor: '#05EBFF',
                                    border: '1px solid #05EBFF',
                                    marginLeft: '10px',
                                }}
                            />
                        )}
                    </div>
                    <span className={styles.numbersText}>employees</span>
                </div>
            </div>
        </HeaderPageLayout>
    );
};
