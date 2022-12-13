import { useMediaQuery } from 'react-responsive';
import { ColumnFullHeightLayout } from 'src/components/Layout/Layout';
import Title from 'src/assets/png/cases/desc/title.png';
import TitleMob from 'src/assets/png/cases/mob/title.png';
import CyberCrew from 'src/assets/png/cases/desc/CyberCrew.png';
import CyberMob from 'src/assets/png/cases/mob/CyberCrew.png';
import CyberTab from 'src/assets/png/cases/tablet/CyberCrew.png';
import MetaGates from 'src/assets/png/cases/desc/MetaGates.png';
import MetaGatesMob from 'src/assets/png/cases/mob/MetaGates.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import MetaGatesTab from 'src/assets/png/cases/tablet/MetaGates.png';
import Image from 'next/image';
import { Typography } from 'src/components/Typography/Typography';
import { Navigation, Pagination, EffectFade } from 'swiper';
import styles from './LandingCases.module.css';

export const LandingCases = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <ColumnFullHeightLayout
            wrapperMix={styles.mainWrapper}
            columnClassName={styles.columnWrapper}
        >
            <div className={styles.titleWrapper}>
                {isMobile ? (
                    <Image
                        className={styles.title}
                        src={TitleMob}
                        alt="title is loading.."
                    />
                ) : (
                    <Image
                        className={styles.title}
                        src={Title}
                        alt="title is loading.."
                    />
                )}
            </div>
            {!isMobile && (
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1.2}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation]}
                    navigation
                    speed={800}
                    className={styles.swiper}
                >
                    <SwiperSlide>
                        <div>
                            {isMobile ? (
                                <Image src={MetaGatesMob} />
                            ) : isTablet ? (
                                <Image
                                    src={MetaGatesTab}
                                    alt="MetaGates downloading..."
                                />
                            ) : (
                                <Image
                                    className={styles.image}
                                    src={MetaGates}
                                    alt="MetaGates downloading..."
                                />
                            )}
                        </div>
                        {/* <Image src={MetaGates} alt="MetaGates downloading..." />) */}

                        <Typography
                            tag={isMobile ? 'h5' : 'h3'}
                            className={styles.imageTitle}
                        >
                            MetaGates
                        </Typography>
                        <Typography tag="p" className={styles.imageDesc}>
                            MetaGates is a unique synthesis of a number of
                            technologies designed to push the boundaries of what
                            is possible in the realm of augmented reality.
                        </Typography>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            {isMobile ? (
                                <Image src={CyberMob} />
                            ) : isTablet ? (
                                <Image
                                    src={CyberTab}
                                    alt="MetaGates downloading..."
                                />
                            ) : (
                                <Image
                                    src={CyberCrew}
                                    alt="Cyber"
                                    className={styles.imageSmall}
                                />
                            )}
                        </div>
                        <Typography
                            tag={isMobile ? 'h5' : 'h3'}
                            className={styles.imageTitle}
                        >
                            CyberCrew
                        </Typography>
                        <Typography tag="p" className={styles.imageDesc}>
                            This unique collection includes 43 of the best
                            digital artists in the NFT space. Each Crew member
                            is an original 1:1 NON-GENERATIVE Collectible with
                            their own story
                        </Typography>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={CyberCrew}
                            alt="Cyber"
                            className={styles.imageSmall}
                        />
                        <Typography
                            tag={isMobile ? 'h5' : 'h3'}
                            className={styles.imageTitle}
                        >
                            CyberCrew
                        </Typography>
                        <Typography tag="p" className={styles.imageDesc}>
                            This unique collection includes 43 of the best
                            digital artists in the NFT space. Each Crew member
                            is an original 1:1 NON-GENERATIVE Collectible with
                            their own story
                        </Typography>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={CyberCrew} alt="Cyber" />
                        <Typography
                            tag={isMobile ? 'h5' : 'h3'}
                            className={styles.imageTitle}
                        >
                            CyberCrew
                        </Typography>
                        <Typography tag="p" className={styles.imageDesc}>
                            This unique collection includes 43 of the best
                            digital artists in the NFT space. Each Crew member
                            is an original 1:1 NON-GENERATIVE Collectible with
                            their own story
                        </Typography>
                    </SwiperSlide>
                </Swiper>
            )}
            {isMobile && (
                <div className={styles.imagesContainer}>
                    <div style={{ minWidth: '280px' }}>
                        <div style={{ width: '80%' }}>
                            <Image src={MetaGatesMob} />
                        </div>
                        {/* <Image src={MetaGates} alt="MetaGates downloading..." />) */}

                        <Typography
                            tag={isMobile ? 'h5' : 'h3'}
                            className={styles.imageTitle}
                        >
                            MetaGates
                        </Typography>
                        <Typography tag="p" className={styles.imageDesc}>
                            MetaGates is a unique synthesis <br /> of a number
                            of technologies <br /> designed to push the
                            boundaries <br /> of what is possible in the realm{' '}
                            <br /> of augmented reality.
                        </Typography>
                    </div>

                    <div style={{ minWidth: '280px' }}>
                        <Image
                            src={CyberCrew}
                            alt="Cyber"
                            style={{ width: '90%' }}
                        />
                        <Typography tag="h5" className={styles.imageTitle}>
                            CyberCrew
                        </Typography>
                        <Typography tag="p" className={styles.imageDesc}>
                            This unique collection includes <br /> 43 of the
                            best digital artists <br /> in the NFT space. Each
                            Crew <br /> member is an original 1:1 <br />{' '}
                            NON-GENERATIVE Collectible <br /> with their own
                            story
                        </Typography>
                    </div>
                </div>
            )}
        </ColumnFullHeightLayout>
    );
};
