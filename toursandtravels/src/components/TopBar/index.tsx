import React from 'react'
import CustomButton from '../CustomButton'
import './index.scss'
function TopBar() {
    return (
        <div className="topbar">
            <div className="topbar__logo">Logo</div>
            <div className="topbar__items">
                <div className='topbar__items__item topbar__items__item--active'>Home</div>
                <div className='topbar__items__item '>Destinations</div>
                <div className='topbar__items__item'>About</div>
                <div className='topbar__items__item'>Partner</div>
                <div className='loginwrapper'>
                    <CustomButton name='Login' mode='outline'/>
                </div>
                <CustomButton name='Register' mode='filled'/>
            </div>
        </div>
    )
}

export default TopBar
