import React, { useState } from 'react'

import DropDownMenu from '../../components/DropDownMenu';

import {IDropDownMenuList} from './Interfaces'

import './index.scss';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


interface IDropDownBoxProps {

    header: string;
    dropDownMenuList: IDropDownMenuList[]; 
    defaultSearchText?: string;
    onClickArrow?: () => void;
    onClickMenuItem?: (dropDown: IDropDownMenuList, i: number) => void;
    

}

function DropDownBox(props: IDropDownBoxProps) {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [textValue, setTextValue]= useState<string>(props.defaultSearchText || "");
    return (
        <div className='dropDownBoxWrapper'>
            <div className="dropDownBoxWrapper__header">{props.header}</div>
            <div className="dropDownBoxWrapper__box">
                <div className="dropDownBoxWrapper__box__defaulText">{textValue}</div>
                <div className='dropDownBoxWrapper__box__arrow' onClick={() => {
                    setShowMenu(!showMenu);
                    props.onClickArrow && props.onClickArrow();
                }}>
                    <KeyboardArrowDownIcon className='MuiSvgIcon-root' />
                </div>
            </div>
            {showMenu &&
                <DropDownMenu dropDownMenuList={props.dropDownMenuList} onClickMenu={(dropDown, i) => {
                    setTextValue(dropDown.heading);
                    setShowMenu(false);
                    props.onClickMenuItem && props.onClickMenuItem(dropDown,i);
                }} />
            }
        </div>
    )

}
export default DropDownBox
