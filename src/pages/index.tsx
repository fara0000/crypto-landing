import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { LandingMain } from 'src/components/LangingBlocks/LandingMain/LandingMain';
import { LandingService } from 'src/components/LangingBlocks/LandingService/LandingService';
import { LandingWorkingProcess } from 'src/components/LangingBlocks/LandingWorkingProcess/LandingWorkingProcess';

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Coreblocks template</title>
            </Head>

            <LandingMain />
            <LandingService />
            <LandingWorkingProcess />
        </React.Fragment>
    );
};

export default Home;
