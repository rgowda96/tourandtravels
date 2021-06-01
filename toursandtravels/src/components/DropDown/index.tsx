import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './index.scss';

interface IDropDownProps {
    name: string;
}

function DropDown(props: IDropDownProps) {
    return (

        <div className='dropdownwrapper'>
            <div className='dropdownwrapper__text'>{props.name}</div>
            <KeyboardArrowDownIcon className='MuiSvgIcon-root' />
        </div>

    )
}

export default DropDown