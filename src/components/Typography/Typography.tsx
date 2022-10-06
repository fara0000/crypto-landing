import clsx from 'clsx';
import React, { ReactNode } from 'react';
import typographyStyles from './Typography.module.css';

type TypographyProps = {
    tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    styles?: object;
    className?: string;
    children: ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({
    tag = 'p',
    styles = {},
    className,
    children,
}) => {
    const TypographyTag = tag;

    return (
        <TypographyTag className={clsx(className, typographyStyles.typography, typographyStyles[tag])} style={styles}>
            {children}
        </TypographyTag>
    );
};