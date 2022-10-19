import { ColumnFullHeightLayout } from 'src/components/Layout/Layout';
import Image from 'next/image';
import tenKNFTCollection from 'src/assets/png/services/10kNFTCollection.png';
import { Typography } from 'src/components/Typography/Typography';
import { ServiceCard } from 'src/components/ServiceCard/ServiceCard';
import styles from './LandingService.module.css';
import { ServiceMainInfo } from 'src/utils/serviceData';

export const LandingService = () => {
    const icon = <Image src={tenKNFTCollection.src} width={94} height={120} />;

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
            <div className={styles.mainServiceBlock}>
                <div className={styles.cardBlock}>
                    {ServiceMainInfo.slice(0, 4).map((item, index) => (
                        <ServiceCard
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
                    {ServiceMainInfo.slice(4, 8).map((item, index) => (
                        <ServiceCard
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
                    {ServiceMainInfo.slice(8, 12).map((item, index) => (
                        <ServiceCard
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
        </ColumnFullHeightLayout>
    );
};
