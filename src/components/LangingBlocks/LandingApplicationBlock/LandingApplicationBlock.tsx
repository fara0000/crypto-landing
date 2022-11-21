import { ColumnFullHeightLayout } from 'src/components/Layout/Layout';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Typography } from 'src/components/Typography/Typography';
import { ServiceCard } from 'src/components/ServiceCard/ServiceCard';
import { ServiceCardType, ServiceMainInfo } from 'src/utils/serviceData';
import { useMediaQuery } from 'react-responsive';
import { ServiceModal } from 'src/components/ServiceCard/components/ServiceModal';
import ArrowRight from 'src/assets/svg/ArrowRightButton.svg';
import { Input } from 'src/components/Input/Input';
import { Button } from 'src/components/Button/Button';
import { Form, Formik, FormikHelpers, Field } from 'formik';
import Telegram from 'src/assets/svg/telegram.svg';
import Snow from 'src/assets/png/SNØW.png';
import Link from 'next/link';
import * as Yup from 'yup';
import { Routes } from 'src/config/routes';
import { BlockProps } from 'src/types';
import { toast } from 'react-toastify';
import styles from './LandingApplicationBlock.module.css';

type FormValuesType = {
    name: string;
    contact: string;
    projectType: string;
    projectDescription: string;
};

const schema = Yup.object()
    .shape({
        name: Yup.string().required(),
        contact: Yup.string().email().required(),
        projectType: Yup.string().required(),
        projectDescription: Yup.string().required(),
    })
    .required();

export const LandingApplicationBlock: React.FC<BlockProps> = ({ htmlId }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [projectType, setProjectType] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const handleSubmitFunc = () => {
        name &&
            contact &&
            projectType &&
            projectDescription &&
            toast.success('Thanks for you request!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        setName('');
        setContact('');
        setProjectDescription('');
        setProjectType('');
    };

    return (
        <ColumnFullHeightLayout
            htmlId={htmlId}
            wrapperMix={styles.mainWrapper}
            columnClassName={styles.columnWrapper}
        >
            <div className={styles.textHeader}>
                <div className={styles.firstPartOfTitle}>
                    <div className={styles.figureWrapper}>
                        <div
                            className={styles.miniCircle}
                            style={{
                                backgroundColor: '#05EBFF',
                                border: '1px solid #05EBFF',
                                marginRight: '10px',
                            }}
                        />
                        <div
                            className={styles.line}
                            style={{ width: '179px' }}
                        />
                    </div>
                    <Typography
                        tag={isMobile ? 'h4' : 'h1'}
                        className={styles.typographyHeader}
                    >
                        Send your
                    </Typography>
                </div>
                <Typography
                    tag={isMobile ? 'h4' : 'h1'}
                    className={styles.typographyHeader}
                >
                    application
                </Typography>
            </div>
            <div className={styles.descriptionWrapper}>
                <div className={styles.description}>
                    <Typography tag={isMobile ? 'span' : 'h3'}>
                        Feel free to reach out if you want to collaborate with
                        us, or simply have a chat.
                    </Typography>
                </div>
            </div>
            <div>
                <form className={styles.formWrapper} name="application-form">
                    <div className={styles.inputWrapper}>
                        <div>
                            <Input
                                onChange={setName}
                                name="name"
                                type="text"
                                labelText={name ? '' : 'Name'}
                                inputClassName={styles.input}
                            />
                            <Input
                                onChange={setContact}
                                name="contact"
                                type="email"
                                labelText={contact ? '' : 'Contact'}
                                inputClassName={styles.input}
                            />
                            <Input
                                onChange={setProjectType}
                                name="projectType"
                                type="text"
                                labelText={projectType ? '' : 'Project Type'}
                                inputClassName={styles.input}
                            />
                        </div>
                        <div>
                            <Input
                                onChange={setProjectDescription}
                                name="projectDescription"
                                type="text"
                                labelText={
                                    projectDescription
                                        ? ''
                                        : 'Project Description'
                                }
                                inputClassName={styles.input}
                            />
                        </div>
                    </div>
                    <Button
                        type="submit"
                        form="application-form"
                        theme="black"
                        disabled={
                            !(
                                name &&
                                projectDescription &&
                                projectType &&
                                contact
                            )
                        }
                        className={styles.sendButton}
                        size={isMobile ? 's' : 'l'}
                        buttonType="outlined"
                        onClick={handleSubmitFunc}
                    >
                        Send <ArrowRight />
                    </Button>
                </form>
            </div>
        </ColumnFullHeightLayout>
    );
};
