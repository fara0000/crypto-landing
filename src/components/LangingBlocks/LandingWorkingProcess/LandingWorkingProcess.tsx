import { ColumnFullHeightLayout } from 'src/components/Layout/Layout';
import { Typography } from 'src/components/Typography/Typography';
import Image from 'next/image';
import FirstNumber from 'src/assets/png/processOfWorking/desktop/01.svg';
import SecondNumber from 'src/assets/png/processOfWorking/desktop/02.svg';
import ThirdNumber from 'src/assets/png/processOfWorking/desktop/03.svg';
import FourthNumber from 'src/assets/png/processOfWorking/desktop/04.svg';
import FifthNumber from 'src/assets/png/processOfWorking/desktop/05.svg';
import styles from './LandingWorkingProcess.module.css';

export const LandingWorkingProcess = () => {
    return (
        <ColumnFullHeightLayout
            wrapperMix={styles.mainWrapper}
            columnClassName={styles.columnWrapper}
        >
            <div className={styles.textHeader}>
                <Typography tag="h1" className={styles.typography}>
                    The process
                </Typography>
                <Typography tag="h1" className={styles.typography}>
                    of working
                </Typography>
                <Typography tag="h1" className={styles.typography}>
                    with us
                </Typography>
            </div>
            <div className={styles.mainContentWrapper}>
                <FirstNumber />
                <SecondNumber />
                <ThirdNumber />
                <FourthNumber />
                <FifthNumber />
            </div>
        </ColumnFullHeightLayout>
    );
};
