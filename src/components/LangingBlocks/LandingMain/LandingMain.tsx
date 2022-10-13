import styles from './LandingMain.module.css';
import Image from 'next/image';
import logo from 'src/assets/png/megaBigLogo.png';
import { ColumnHeaderPageLayout } from 'src/components/Layout/Layout';
import { Burger } from 'src/components/Burger/Burger';

export const LandingMain = () => {
    return (
        <ColumnHeaderPageLayout mainWrapperClassName={styles.mainWrapper}>
            <div>
                hello
            </div>
            <Burger />
            {/*<div className={styles.bigLogoImageWrapper}>*/}
            {/*    <Image*/}
            {/*        className={styles.bigLogoImage}*/}
            {/*        src={logo.src}*/}
            {/*        width={798}*/}
            {/*        height={713}*/}
            {/*        alt="big logo is loading..."*/}
            {/*        // blurDataURL={logo.src}*/}
            {/*    />*/}
            {/*</div>*/}
        </ColumnHeaderPageLayout>
    )
}