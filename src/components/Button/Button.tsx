/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.css';

type ButtonType = 'filled' | 'outlined';
type ButtonSize = 's' | 'l';
type ButtonTheme = 'accent' | 'white' | 'black';

type ButtonProps = {
    buttonType?: ButtonType;
    size?: ButtonSize;
    theme?: ButtonTheme;
    rounded?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    form?: string;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

/**
 * @param {ButtonSize} [props.size]
 * * sm - 309px x 57px
 * * lg - 1297px x 120px
 * @param {ButtonTheme} [props.theme]
 * * accent
 * * white
 * * black
 * * @param {ButtonType} [props.buttonType]
 * * filled
 * * outlined
 * @param {boolean} [props.rounded] - set rounded borders
 * @returns
 */
export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    buttonType = 'outlined',
    size = 's',
    theme = 'accent',
    onClick = () => {},
    children,
    rounded = true,
    className,
    disabled = false,
    form,
    ...props
}) => {
    return (
        <button
            type="button"
            form={form}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                styles.button,
                styles[theme],
                styles[size],
                styles[buttonType],
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
