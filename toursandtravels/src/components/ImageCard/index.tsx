import React from 'react'
import './index.scss';
//import img1 from './eiphel.jpg'

interface IImageCardProps {
    imgPath: string;
    place: string;
    country: string;
}

function ImageCard(props: IImageCardProps ) {
    return (
        <div className='imagecardbox'>
            <img src={props.imgPath} alt='Mountain' className="imagecardbox__image"/>
            <div className='imagecardbox__rectangle'>
                <div className='imagecardbox__rectangle__placename'>{props.place}</div>
                <div className='imagecardbox__rectangle__countryname'>{props.country}</div>
            </div>
        </div>
    )
}

export default ImageCard
