import clsx from 'clsx';
import React from 'react';
import styles from './Layout.module.css';
import { Header } from 'src/components/Header/Header';

type ColumnProps = {
    columnClassName?: string;
    htmlId?: string;
    children: React.ReactNode;
};

export const Column: React.FC<ColumnProps> = ({
    columnClassName,
    htmlId,
    children,
}) => (
    <div className={clsx(styles.column, columnClassName)} id={htmlId}>
        {children}
    </div>
);

type HeaderPageLayoutProps = {
    mainWrapperClassName?: string;
    contentWrapperClassName?: string;
    children: React.ReactNode;
};

export const HeaderPageLayout: React.FC<HeaderPageLayoutProps> = ({
    mainWrapperClassName,
    contentWrapperClassName,
    children,
}) => (
    <div className={clsx(styles.wrapper, mainWrapperClassName)}>
        <Header />

        <div className={clsx(styles.contentWrapper, contentWrapperClassName)}>
            {children}
        </div>
    </div>
);

export const ColumnHeaderPageLayout: React.FC<HeaderPageLayoutProps & ColumnProps> = ({
    mainWrapperClassName,
    contentWrapperClassName,
    children,
    ...columnProps
}) => (
    <HeaderPageLayout mainWrapperClassName={mainWrapperClassName} contentWrapperClassName={contentWrapperClassName}>
        <Column {...columnProps}>{children}</Column>
    </HeaderPageLayout>
);

type ColumnFullHeightLayoutProps = ColumnProps & {
    wrapperMix?: string;
};

export const ColumnFullHeightLayout: React.FC<ColumnFullHeightLayoutProps> = ({
    wrapperMix,
    children,
    ...columnProps
}) => (
    <div className={clsx(styles.wrapper, wrapperMix)}>
        <Column
            {...columnProps}
            columnClassName={clsx(styles.contentWrapper, columnProps.columnClassName)}
        >
            {children}
        </Column>
    </div>
);
