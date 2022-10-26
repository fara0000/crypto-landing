import { ColumnFullHeightLayout } from 'src/components/Layout/Layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Typography } from 'src/components/Typography/Typography';
import { ServiceCard } from 'src/components/ServiceCard/ServiceCard';
import { ServiceCardType, ServiceMainInfo } from 'src/utils/serviceData';
import { useMediaQuery } from 'react-responsive';
import styles from './LandingService.module.css';
import RustIcon from 'src/assets/png/services/10kNFTCollection.png';
import { ServiceModal } from 'src/components/ServiceCard/components/ServiceModal';

export const LandingService = () => {
    const [ clickCard, setClickedCard ] = useState<ServiceCardType>({
        title: '',
        icon: {
            src: '',
            height: 0,
            width: 0,
        },
        description: '',
    });
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        clickCard.title && setIsModalOpen(true);
    }, [clickCard])

    return (
        <ColumnFullHeightLayout
            wrapperMix={styles.mainWrapper}
            columnClassName={styles.columnWrapper}
        >
            <div className={styles.textHeader}>
                <Typography className={styles.heading} tag="h1">
                    Services
                </Typography>
                <Typography className={styles.aboutText} tag="p">
                    <Typography tag="span" className={styles.aboutText}>
                        Snøw helps plan, design, develop and
                    </Typography>{' '}
                    <br />
                    launch blockchain applications.
                </Typography>
            </div>
            {!isMobile ? (
                <div className={styles.mainServiceBlock}>
                    <div className={styles.cardBlock}>
                        {ServiceMainInfo.slice(0, 4).map((item) => (
                            <ServiceCard
                                card={item}
                                key={item.title}
                                icon={
                                    <Image
                                        src={item.icon}
                                        width="120"
                                        height="120"
                                    />
                                }
                                title={item.title}
                                setCard={setClickedCard}
                            />
                        ))}
                    </div>
                    <div
                        className={styles.cardBlock}
                        style={{ marginTop: '400px' }}
                    >
                        {ServiceMainInfo.slice(4, 8).map((item) => (
                            <ServiceCard
                                card={item}
                                key={item.title}
                                icon={
                                    <Image
                                        src={item.icon}
                                        width="120"
                                        height="120"
                                    />
                                }
                                title={item.title}
                                setCard={setClickedCard}
                            />
                        ))}
                    </div>
                    <div className={styles.cardBlock}>
                        {ServiceMainInfo.slice(8, 12).map((item) => (
                            <ServiceCard
                                card={item}
                                key={item.title}
                                icon={
                                    <Image
                                        src={item.icon}
                                        width="120"
                                        height="120"
                                    />
                                }
                                title={item.title}
                                setCard={setClickedCard}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.mainServiceBlockMob}>
                    {ServiceMainInfo.map((item) => (
                        <ServiceCard
                            card={item}
                            key={item.title}
                            icon={
                                <Image
                                    src={item.icon}
                                    width="120"
                                    height="120"
                                />
                            }
                            title={item.title}
                            setCard={setClickedCard}
                        />
                    ))}
                </div>
            )}
            <ServiceModal
                setCard={setClickedCard}
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                title={clickCard.title}
                icon={
                    <Image
                        src={clickCard.icon.src}
                        width="110"
                        height="120"
                    />
                }
                description={clickCard.description}
            />
        </ColumnFullHeightLayout>
    );
};
