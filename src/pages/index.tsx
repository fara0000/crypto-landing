import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ArrowRightIcon from 'src/assets/svg/arrowRight.svg';
import { Button } from 'src/components/Button/Button';
import { Typography } from 'src/components/Typography/Typography';
import { Input } from 'src/components/Input/Input';

const Home: NextPage = () => (
    <React.Fragment>
        <Head>
            <title>Coreblocks template</title>
        </Head>

        <Button
            theme='accent'
            size='s'
            rounded
        >
            <span>
                Send your application
            </span>
            <ArrowRightIcon />
        </Button>

        <Input
            type='text'
            labelText='surname'
        />

        <Typography tag="h1">
            Hello h1
        </Typography>
        <Typography tag="h2">
            Hello h2
        </Typography>
        <Typography tag="h3">
            Hello h3
        </Typography>
        <Typography tag="h4">
            Hello h4
        </Typography>
        <Typography tag="h5">
            Hello h5
        </Typography>
        <Typography tag="p">
            Hello p
        </Typography>
        <Typography tag="span">
            Hello span
        </Typography>
    </React.Fragment>
);

export default Home;
