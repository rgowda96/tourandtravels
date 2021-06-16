import React from 'react'

import { useState } from 'react'

import { withRouter, RouteComponentProps, NavLink } from 'react-router-dom';

import { ISideBarNavigationList } from './Interfaces';

import './index.scss';


interface ISideBarNavigationProps extends RouteComponentProps{
    sideBarList: ISideBarNavigationList[];
    onClickSideBox?: (sideBarItem:ISideBarNavigationList,i:number)=>void;
    defaultSelect?: number;
}

function SideBarNavigation(props: ISideBarNavigationProps) {

    const [userSelectedIndex, setUserSelectedIndex] = useState<number>(-1)

    const getBoxClassName = (index: number) => {
        if (index == userSelectedIndex) {
            return "sideBarWrapper__box sideBarWrapper__box--active"
        }
        return "sideBarWrapper__box"
    }
    return (
        <div className='sideBarWrapper'>

            {  
                props.sideBarList.map((sideBarItem, i) => {
                    return (
                        <div className={getBoxClassName(i)} onClick={() => {
                            setUserSelectedIndex(i);
                            props.onClickSideBox && props.onClickSideBox(sideBarItem, i)
                            props.history.push(sideBarItem.url)
                        }

                        } >
                            <div className="sideBarWrapper__box__icon"><img src={sideBarItem.icon} className='imgProps' /></div>
                            <div className='sideBarWrapper__box__navigatorName'>{sideBarItem.navigatorName}</div>
                        </div>
                    )
                })

            }

        </div>

    )
}

export default withRouter(SideBarNavigation)