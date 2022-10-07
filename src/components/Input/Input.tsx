import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Input.module.css';

export type InputTypes = 'text' | 'number' | 'email';

type InputProps = {
    type: InputTypes;
    labelText?: string;
    inputRequired?: boolean
    inputClassName?: string;
    labelClassName?: string;
    wrapperClassName?: string;
};

export const Input: React.FC<InputProps> = ({
    type,
    labelText,
    inputRequired,
    inputClassName,
    labelClassName,
    wrapperClassName,
}) => {
    return (
        <div className={clsx(wrapperClassName, styles.wrapper)}>
                <input
                    className={clsx(inputClassName, styles.input)}
                    type={type}
                    required={inputRequired}
                />
                <label className={clsx(labelClassName, styles.label)}>
                    {labelText}
                </label>
        </div>
    )
}