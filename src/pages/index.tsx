import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { LandingMain } from 'src/components/LangingBlocks/LandingMain/LandingMain';
import { LandingService } from 'src/components/LangingBlocks/LandingService/LandingService';
import { LandingWorkingProcess } from 'src/components/LangingBlocks/LandingWorkingProcess/LandingWorkingProcess';
import { LandingLibrary } from 'src/components/LangingBlocks/LandingLibrary/LandingLibrary';
import { LandingCases } from 'src/components/LangingBlocks/LandingCases/LandingCases';
import { LandingTeam } from 'src/components/LangingBlocks/LandingTem/LandingTeam';

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Coreblocks template</title>
            </Head>

            <LandingMain />
            <LandingService />
            <LandingWorkingProcess />
            <LandingLibrary />
            <LandingCases />
            <LandingTeam />
        </React.Fragment>
    );
};

export default Home;
