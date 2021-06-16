import React, { useState } from 'react'
import './index.scss';
import {IDropDownMenuList} from '../../components/DropDownBox/Interfaces'

interface IDropDownMenuProps {

    dropDownMenuList: IDropDownMenuList[];
    onClickMenu?: (dropDown: IDropDownMenuList, i: number) => void;

}

function DropDownMenu(props: IDropDownMenuProps) {
    const [userSelectedMenu, setSelectedMenu] = useState<number>(-1);
    return (
        <div className='dropDownMenuWrapper'>
            {
                props.dropDownMenuList.map((dropDown, i) => {
                    return (
                        <div className='dropDownMenuWrapper__box' onClick={() => {
                            setSelectedMenu(i);
                            props.onClickMenu && props.onClickMenu(dropDown, i);
                        }}>
                            <div className='dropDownMenuWrapper__box__heading'>{dropDown.heading}</div>
                            <div className='dropDownMenuWrapper__box__description'>{dropDown.description}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DropDownMenu
