import clsx from 'clsx';
import React from 'react';
import styles from './Input.module.css';

export type InputTypes = 'text' | 'number' | 'email';

type InputProps = {
    type: InputTypes;
    labelText?: string;
    inputRequired?: boolean;
    inputClassName?: string;
    labelClassName?: string;
    wrapperClassName?: string;
    onChange?: any;
    name?: string;
    ref?: any;
    props?: InputProps;
};

export const Input: React.FC<InputProps> = ({
    type,
    labelText,
    inputRequired,
    inputClassName,
    labelClassName,
    wrapperClassName,
    onChange,
    ref,
    name,
    ...props
}) => {
    return (
        <div className={clsx(wrapperClassName, styles.wrapper)}>
            <input
                ref={ref}
                id={name}
                className={clsx(inputClassName, styles.input)}
                type={type}
                required={inputRequired}
                onChange={(e) => onChange(e.target.value)}
                {...(props as any)}
            />
            <label className={clsx(labelClassName, styles.label)}>
                {labelText}
            </label>
        </div>
    );
};
