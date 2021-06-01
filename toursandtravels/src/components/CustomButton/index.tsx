import React from 'react'
import './index.scss';

interface ICustomButtonProps {
    name: string;
    mode: 'filled' | 'outline'
}

function CustomButton(props: ICustomButtonProps) {
    return (

        <div className={`custombuttonwrapper custombuttonwrapper--${props.mode}`}>
                    <div className={`custombuttonwrapper__text custombuttonwrapper__text--${props.mode}`}>{props.name}</div>
        </div>
    )
}

export default CustomButton