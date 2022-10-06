import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.css';
import * as types from './types';

export type ButtonProps = {
    size?: types.ButtonSize;
    theme?: types.ButtonTheme;
    rounded?: boolean;
    onClick?: () => void;
    disabled?: boolean;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    >;

/**
 * @param {ButtonSize} [props.size]
 * * sm - 20px x 45px
 * * md - 20px x 62px
 * * lg - 28px x 96px
 * @param {ButtonVariant} [props.variant]
 * * filled
 * * outlined
 * @param {boolean} [props.rounded] - set rounded borders
 * @returns
 */
export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    size = 'm',
    theme= 'accent',
    onClick = () => {},
    children,
    rounded = true,
    className,
    disabled= false,
    ...props
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                styles.button,
                styles[theme],
                styles[size],
                className,
                {
                    [styles.rounded]: rounded,
                },
            )}
            {...props}
        >
            {children}
        </button>
    );
};
