import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { LandingMain } from 'src/components/LangingBlocks/LandingMain/LandingMain';

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Coreblocks template</title>
            </Head>

            <LandingMain />
        </React.Fragment>
    );
};

export default Home;
