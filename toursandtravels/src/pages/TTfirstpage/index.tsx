import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import WorldLogo from './undraw_world_9iqb.svg'
import DestinationImg from './undraw_destinations_fpv7.svg'
import DropDown from '../../components/DropDown';
import CustomButton from '../../components/CustomButton';
import './index.scss';
import { withRouter, RouteComponentProps, NavLink } from 'react-router-dom';


function TTfirstpage( props:RouteComponentProps ) {
    console.log(props)
    return (
        <div>
            <div className='firstsection'>
                <div className='info'>
                    <div className='info__headingtext'>Explore and Travels</div>
                    <div className='info__holidaywrapper'>
                        <div className='info__holidaywrapper__holidaytext'>Holiday finder</div>
                        <div className='test'> 
                            <div className='info__holidaywrapper__boxwrapper'>
                                <DropDown name='Location' />
                                <DropDown name='Activity' />
                            </div>
                            <div className='info__holidaywrapper__boxwrapper'>
                                <DropDown name='Grade' />
                                <DropDown name='Date' />
                          </div>
                        </div>
                    </div>
                    <div className='explorebox'>
                        <CustomButton name='Explore' mode='filled' />
                    </div>
                </div>
                <div className='imagecontainer'><img src={WorldLogo} alt="Mountain" /></div>
            </div>
            <div className='secondsection'>
                <div className='secondsection__imagecontainer'>
                    <img src={DestinationImg} className='secondsection__imagecontainer__image' alt="Mountain" />
                </div>
                <div className='secondsection__textcontainer'>
                    <div className='secondsection__textcontainer__header'>A new way to explore the world </div>
                    <div className='secondsection__textcontainer__text'>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
trip, but now, they can also let Lonely Planet Experiences lead the way</div>
                    <CustomButton name='Learn more' mode='filled' onButtonClick={() => {
                        props.history.push('/secondpage')
                    }}/>                    
                </div>
            </div>
        </div>
    )
}
export default withRouter(TTfirstpage)

