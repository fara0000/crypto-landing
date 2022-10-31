import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import Modal from 'react-modal';
import CloseModalIcon from 'src/assets/svg/closeModalIcon.svg';
import ArrowRightIcon from 'src/assets/svg/arrowRight.svg';
import { Typography } from 'src/components/Typography/Typography';
import { Button } from 'src/components/Button/Button';
import { useMediaQuery } from 'react-responsive';
import { ServiceCardType } from 'src/utils/serviceData';
import styles from './ServiceModal.module.css';

const mobCustomStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        overflow: 'hidden',
        bottom: 'auto',
        width: 'calc(100% - 20px)',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        transform: 'translate(-50%, -50%)',
        borderRadius: '12px',
        // margin: '10px 10px 42px 10px'
    },
    overlay: {
        backgroundColor: '#000',
    },
};

const customStyles = {
    content: {
        // position: 'absolute',
        backgroundColor: '#FFFFFF',
        top: '50%',
        left: '50%',
        width: '832px',
        height: 'auto',
        right: 'auto',
        padding: '41px 16px 40px 52px',
        bottom: 'auto',
        opacity: 1,
        zIndex: 1000,
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '12px',
    },
    overlay: {
        // position: 'fixed',
        backgroundColor: '#000',
        opacity: 0.95,
        zIndex: 1,
    },
};

type ModalProps = {
    setCard: Dispatch<SetStateAction<ServiceCardType>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
    icon: ReactNode;
    title: string;
    description: string;
};

export const ServiceModal: React.FC<ModalProps> = ({
    isOpen,
    setIsOpen,
    icon,
    title,
    description,
    setCard,
}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            // preventScroll={isOpen}
            // onRequestClose={onRequestClose}
            style={!isMobile ? customStyles : mobCustomStyles}
            shouldCloseOnOverlayClick
            shouldCloseOnEsc
            contentLabel="Service Modal"
        >
            <div className={styles.mainModalWrapper}>
                <div className={styles.serviceIconWrapper}>{icon}</div>
                <div className={styles.serviceInfoWrapper}>
                    <Typography tag="h3" className={styles.title}>
                        {title}
                    </Typography>
                    <Typography tag="p" className={styles.description}>
                        {description}
                    </Typography>
                    <Button
                        size="s"
                        theme="accent"
                        className={styles.sendButton}
                    >
                        Send your application
                        <ArrowRightIcon style={{ width: '18px' }} />
                    </Button>
                </div>
                <div
                    className={styles.closeIconWrapper}
                    onClick={() => setIsOpen(false)}
                >
                    <CloseModalIcon
                        onClick={() => {
                            setIsOpen(false);
                            setCard({
                                title: '',
                                icon: {
                                    src: '',
                                    height: 0,
                                    width: 0,
                                },
                                description: '',
                            });
                        }}
                        className={styles.closeIcon}
                    />
                </div>
            </div>
        </Modal>
    );
};
