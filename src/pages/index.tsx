import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ArrowRightIcon from '../assets/svg/arrowRight.svg';
import { Button } from 'src/components/Button/Button';
import { Typography } from 'src/components/Typography/Typography';

const Home: NextPage = () => (
    <React.Fragment>
        <Head>
            <title>Coreblocks template</title>
        </Head>

        <Button
            // height={}
            theme='black'
            size='s'
            rounded
        >
            <span>
                Send your application
            </span>
            <ArrowRightIcon />
        </Button>

        <Typography>
            Hello h1
        </Typography>
        <Typography>
            Hello h2
        </Typography>
        <Typography>
            Hello h3
        </Typography>
        <Typography>
            Hello p
        </Typography>
        <Typography>
            Hello span
        </Typography>
    </React.Fragment>
);

export default Home;
