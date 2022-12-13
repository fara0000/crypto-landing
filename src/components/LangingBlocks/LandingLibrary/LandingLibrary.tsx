import React from 'react';
import { ColumnFullHeightLayout } from 'src/components/Layout/Layout';
import { Typography } from 'src/components/Typography/Typography';
import Proof from 'src/assets/svg/library/desc/proof.svg';
import ProofMob from 'src/assets/svg/library/mob/proof.svg';
import Flash from 'src/assets/svg/library/desc/flash.svg';
import FlashMob from 'src/assets/svg/library/mob/flash.svg';
import Dao from 'src/assets/svg/library/desc/dao.svg';
import DaoMob from 'src/assets/svg/library/mob/dao.svg';
import Defi from 'src/assets/svg/library/desc/defi.svg';
import DefiMob from 'src/assets/svg/library/mob/defi.svg';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import { BlockProps } from 'src/types';
import styles from './LandingLibrary.module.css';

export const LandingLibrary: React.FC<BlockProps> = ({ htmlId }) => {
    const router = useRouter();
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <ColumnFullHeightLayout
            htmlId={htmlId}
            wrapperMix={styles.mainWrapper}
            columnClassName={styles.columnWrapper}
        >
            <Typography
                tag={isMobile ? 'h4' : 'h1'}
                className={styles.typography}
            >
                Library
            </Typography>
            <div className={styles.cardsContainer}>
                <div className={styles.cardWrapper}>
                    {isMobile ? <ProofMob /> : <Proof />}
                    <Typography tag="h5" className={styles.title}>
                        Ethereum Proof-of-Work <br />
                        (PoW) vs Ethereum <br />
                        Proof-of-Stake (PoS)
                    </Typography>
                    <span className={styles.text}>
                        With the long-awaited Ethereum <br />
                        Merge approaching in a month, <br />
                        recent developments on a potential <br />
                        fork of the...{' '}
                        <a
                            style={{
                                outline: 'none',
                                color: '#05EBFF',
                                textDecoration: 'none',
                            }}
                            href="https://coinmarketcap.com/alexandria/article/ethereum-proof-of-work-pow-vs-ethereum-proof-of-stake-pos"
                        >
                            MORE
                        </a>
                    </span>
                </div>
                <div className={styles.cardWrapper}>
                    {isMobile ? <FlashMob /> : <Flash />}
                    <Typography tag="h5" className={styles.title}>
                        What are Flash Loans?
                    </Typography>
                    <span className={styles.text}>
                        Flash loans are loans where users <br />
                        can borrow funds without any <br />
                        collateral so long as the user pays <br />
                        back the loan in the same...{' '}
                        <a
                            style={{
                                outline: 'none',
                                color: '#05EBFF',
                                textDecoration: 'none',
                            }}
                            href="https://projectreview.notion.site/Flash-loans-d2369dae927a469cab7ace393c68ecf9"
                        >
                            MORE
                        </a>
                    </span>
                </div>
                <div className={styles.cardWrapper}>
                    {isMobile ? <DaoMob /> : <Dao />}
                    <Typography tag="h5" className={styles.title}>
                        What Was The DAO?
                    </Typography>
                    <span className={styles.text}>
                        The DAO was a decentralized <br />
                        autonomous organization (DAO) <br />
                        that was launched in on 2016 the <br />
                        Ethereum blockchain. After...{' '}
                        <a
                            style={{
                                outline: 'none',
                                color: '#05EBFF',
                                textDecoration: 'none',
                            }}
                            href="https://www.gemini.com/cryptopedia/the-dao-hack-makerdao"
                        >
                            MORE
                        </a>
                    </span>
                </div>
                <div className={styles.cardWrapper}>
                    {isMobile ? <DefiMob /> : <Defi />}
                    <Typography tag="h5" className={styles.title}>
                        DEFI Sandwich Attack <br />
                        Explain
                    </Typography>

                    <span className={styles.text}>
                        In this article, I am going to <br />
                        summarise what is sandwich attacks <br />
                        with an example and mathematical <br />
                        view so you can understand....{' '}
                        <a
                            style={{
                                outline: 'none',
                                color: '#05EBFF',
                                textDecoration: 'none',
                            }}
                            href="https://medium.com/coinmonks/defi-sandwich-attack-explain-776f6f43b2fd"
                        >
                            MORE
                        </a>
                    </span>
                </div>
            </div>
        </ColumnFullHeightLayout>
    );
};
