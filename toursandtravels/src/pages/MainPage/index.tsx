import React from 'react';
import { withRouter, RouteComponentProps, NavLink } from 'react-router-dom';

import SideBarNavigation from '../../components/SideBarNavigation';

import './index.scss';

import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import tick from '../../assets/tick.png'


const tempSideBarList = [
    {
        icon: icon1,
        navigatorName: "First Page",
        url:'/firstpage'
    },
    {
        icon: icon2,
        navigatorName: "Second Page",
        url: '/secondpage'
    },
    {
        icon: icon3,
        navigatorName: "Third Page",
        url: '/thirdpage'
    },
    {
        icon: icon4,
        navigatorName: "Components Page",
        url:'/componentspage'
  
    }
  
  ]
function MainPage(props: RouteComponentProps) {
    return (
        <div className='MainPageWrapper'>
            <SideBarNavigation sideBarList={tempSideBarList}/>
        </div>
    )
}

export default MainPage
