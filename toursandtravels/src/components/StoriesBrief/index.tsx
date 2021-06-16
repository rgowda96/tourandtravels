import React from 'react'
import './index.scss';


interface IStoriesBrief{
    imgPath: string;
    header: string;
    text: string;
}
function StoriesBrief( props:IStoriesBrief ) {
    return (
        <div className='storiesbriefwrapper'>
            <img src={props.imgPath} alt='Mountain' className='storiesbriefwrapper__image' />
            <div className='storiesbriefwrapper__header'>{props.header}</div>
            <div className='storiesbriefwrapper__text'>{props.text}</div>
            <div className='storiesbriefwrapper__nextsection'>Read more</div>
        </div>
    )
}

export default StoriesBrief
