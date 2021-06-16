import React from 'react'
import './index.scss';
import bill from './Bil.jpg'
import Fly from './Butter.jpg'
import Rock from './Rock.jpg'
import Beach from './brach.jpg'
import Greenery from './Greenery.jpg'
import StoriesBrief from '../../components/StoriesBrief';

function TTthirdpage() {
    return (
        <div>
            <div className='thirdpage'>
                <div className='testimonials'>
                    <div className='testimonials__brief'>
                        <div className="testimonials__brief__header">Testimonials</div>
                        <div className="testimonials__brief__stars">*****</div>
                        <div className="testimonials__brief__text">“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</div>
                        <div className="testimonials__brief__name">Edward Newgate</div>
                        <div className="testimonials__brief__role">Founder Circle</div>
                    </div>
                    <div className='testimonials__imagesection'><img src={bill} className='testimonials__imagesection__image' /></div>
                </div>
                <div className='trendingsection'>
                    <div className='trendingsection__heading'>
                        <div className='trendingsection__heading__header'>Trending stories</div>
                        <div className='trendingsection__heading__optionwrapper'>
                            <div className='trendingsection__heading__optionwrapper__option'>View all </div> 
                            <div className='trendingsection__heading__optionwrapper__option__symbol'> {'>'}</div>
                        </div>
                    </div>
                    <div className='trendingsection__stories'>
                    <StoriesBrief imgPath={Fly} header='The many benefits of  
taking a healing holiday' text='‘Helaing holidays’ are on the rise 
tohelp maximise your health and happines...'/>
                    <StoriesBrief imgPath={Rock} header='The best Kyoto restaurant
to try Japanese food' text='From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
to visit...'/>
                    <StoriesBrief imgPath={Beach} header='Skip Chichen Itza and head
to this remote Yucatan' text='It’s remote and challenging to get,
but braving the jungle and exploring
these ruins without the...'/>
                    <StoriesBrief imgPath={Greenery} header='Surf’s up at these beginner
spots around the world' text='If learning to surf has in on your to-
do list for a while, the good news
is: it’s never too late...'/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default TTthirdpage
