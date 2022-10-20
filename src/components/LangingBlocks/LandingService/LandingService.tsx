import { ColumnFullHeightLayout } from 'src/components/Layout/Layout';
import Image from 'next/image';
import { Typography } from 'src/components/Typography/Typography';
import { ServiceCard } from 'src/components/ServiceCard/ServiceCard';
import { ServiceMainInfo } from 'src/utils/serviceData';
import { useMediaQuery } from 'react-responsive';
import styles from './LandingService.module.css';

export const LandingService = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

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
                                key={item.title}
                                icon={
                                    <Image
                                        src={item.icon}
                                        width="120"
                                        height="120"
                                    />
                                }
                                title={item.title}
                            />
                        ))}
                    </div>
                    <div
                        className={styles.cardBlock}
                        style={{ marginTop: '400px' }}
                    >
                        {ServiceMainInfo.slice(4, 8).map((item) => (
                            <ServiceCard
                                key={item.title}
                                icon={
                                    <Image
                                        src={item.icon}
                                        width="120"
                                        height="120"
                                    />
                                }
                                title={item.title}
                            />
                        ))}
                    </div>
                    <div className={styles.cardBlock}>
                        {ServiceMainInfo.slice(8, 12).map((item) => (
                            <ServiceCard
                                key={item.title}
                                icon={
                                    <Image
                                        src={item.icon}
                                        width="120"
                                        height="120"
                                    />
                                }
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.mainServiceBlockMob}>
                    {ServiceMainInfo.map((item) => (
                        <ServiceCard
                            key={item.title}
                            icon={
                                <Image
                                    src={item.icon}
                                    width="120"
                                    height="120"
                                />
                            }
                            title={item.title}
                        />
                    ))}
                </div>
            )}
        </ColumnFullHeightLayout>
    );
};
