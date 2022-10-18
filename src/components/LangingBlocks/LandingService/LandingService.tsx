import { ColumnFullHeightLayout } from 'src/components/Layout/Layout';
import styles from './LandingService.module.css';
import Image from 'next/image';
import tenKNFTCollection from 'src/assets/png/services/10kNFTCollection.png';
import { Typography } from 'src/components/Typography/Typography';
import { ServiceCard } from 'src/components/ServiceCard/ServiceCard';

export const LandingService = () => {
    const icon = <Image src={tenKNFTCollection.src} width={94} height={120} />

    return (
        <ColumnFullHeightLayout wrapperMix={styles.mainWrapper}>
            <div className={styles.textHeader}>
                <Typography className={styles.heading} tag="h1">
                    Services
                </Typography>
                <Typography className={styles.aboutText} tag="p">
                    <Typography tag="span" className={styles.aboutText}>Snøw helps plan, design, develop and</Typography> <br/>
                    launch blockchain applications.
                </Typography>
            </div>
            <div className={styles.mainServiceBlock}>
                <ServiceCard icon={icon} title={"DEX"} />
            </div>
        </ColumnFullHeightLayout>
    )
}
