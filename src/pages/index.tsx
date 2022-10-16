import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import ArrowRightIcon from 'src/assets/svg/arrowRight.svg';
import { Button } from 'src/components/Button/Button';
import { Typography } from 'src/components/Typography/Typography';
import { Input } from 'src/components/Input/Input';
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
}

export default Home;
