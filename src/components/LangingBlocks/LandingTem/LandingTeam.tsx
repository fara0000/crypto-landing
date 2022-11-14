import { useMediaQuery } from 'react-responsive';
import { ColumnFullHeightLayout } from 'src/components/Layout/Layout';
import Title from 'src/assets/png/teams/desc/title.png';
import Ivan from 'src/assets/png/teams/Ivan.png';
import Artem from 'src/assets/png/teams/Artem.png';
import Mikhail from 'src/assets/png/teams/Mikhail.png';
import TitleMob from 'src/assets/png/teams/mob/title.png';
import TitleTablet from 'src/assets/png/teams/tablet/title.png';
import Image from 'next/image';
import { TeamCard } from 'src/components/teamCard/TeamCard';
import styles from './LandingTeam.module.css';

export const LandingTeam = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <ColumnFullHeightLayout
            wrapperMix={styles.mainWrapper}
            columnClassName={styles.columnWrapper}
        >
            <div className={styles.titleWrapper}>
                <Image
                    src={isMobile ? TitleMob : isTablet ? TitleTablet : Title}
                    alt="title is loading..."
                />
            </div>
            <div className={styles.cardsContainer}>
                <TeamCard
                    title="Ivan Fotin"
                    desc="3 years in building and investing in web3. 5 years in IT & Fintech. Solana fellowship winner"
                    image={Ivan}
                />
                <TeamCard
                    title="Artem Pogodin"
                    desc="2 years in web3. 4 years in IT & trading. 4+ M$ monthly trading volume."
                    image={Artem}
                />
                <TeamCard
                    title="Mikhail Grinberg"
                    desc="3 years in IT & PR. UK Global talent in digital technology"
                    image={Mikhail}
                />
            </div>
        </ColumnFullHeightLayout>
    );
};
