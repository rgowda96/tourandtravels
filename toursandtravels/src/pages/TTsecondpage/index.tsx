import React from 'react'
import { withRouter, RouteComponentProps, NavLink } from 'react-router-dom';

import CustomButton from '../../components/CustomButton'
import ImageCard from '../../components/ImageCard'


import './index.scss';


import Eiphel from './eiphel.jpg'
import Taj from './taj.jpg'
import Red from './red.jpg'
import Gol from './Gol.jpg'
import GuideImg from './undraw_Travelers_re_y25a.svg'



function TTsecondpage(props: RouteComponentProps) {
    return (
        <div>
            <div className='destination'>
                <div className='destination__wrapper'>
                    <div className="destination__wrapper__header">Featured destinations</div>
                    <div className='destination__wrapper__option'>View all {'>'}</div>
                </div>
                <div className='destination__cardsection'>
                    <ImageCard imgPath={Eiphel} place='Eiphel Tower' country='France' />
                    <ImageCard imgPath={Taj} place='Taj mahal' country='India' />
                    <ImageCard imgPath={Red} place='Red fort' country='India' />
                    <ImageCard imgPath={Gol} place='Gol Gumbaz' country='India' />
                </div>
            </div>
            <div className='guideswrapper'>
                <div className="guideswrapper__briefsection">
                    <div className='guideswrapper__briefsection__header'>Guides by Thousand Sunny</div>
                    <div className='guideswrapper__briefsection__text'>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</div>
                    <CustomButton name='Download' mode='filled' onButtonClick={() => {
                        props.history.push('/thirdpage')
                    }} />
                </div>
                <div className="guideswrapper__image"><img src={GuideImg} className="guideswrapper__image__guideimg" /></div>
            </div>
        </div>
    )
}
export default withRouter(TTsecondpage)
