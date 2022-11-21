import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { LandingMain } from 'src/components/LangingBlocks/LandingMain/LandingMain';
import { LandingService } from 'src/components/LangingBlocks/LandingService/LandingService';
import { LandingWorkingProcess } from 'src/components/LangingBlocks/LandingWorkingProcess/LandingWorkingProcess';
import { LandingLibrary } from 'src/components/LangingBlocks/LandingLibrary/LandingLibrary';
import { LandingCases } from 'src/components/LangingBlocks/LandingCases/LandingCases';
import { LandingTeam } from 'src/components/LangingBlocks/LandingTeam/LandingTeam';
import { LandingApplicationBlock } from 'src/components/LangingBlocks/LandingApplicationBlock/LandingApplicationBlock';
import { Footer } from 'src/components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Coreblocks template</title>
            </Head>

            <LandingMain htmlId="about" />
            <LandingService htmlId="services" />
            <LandingWorkingProcess />
            <LandingLibrary htmlId="library" />
            <LandingCases />
            <LandingTeam htmlId="team" />
            <LandingApplicationBlock htmlId="contact" />
            <Footer />
            <ToastContainer />
        </React.Fragment>
    );
};

export default Home;
