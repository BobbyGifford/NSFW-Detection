import React from 'react';

import './OutputImage.css'

const OutputImage = ({ imageUrl }) => {
    return (
        <div className='mt-3' >
            <img className='max-image-size' src={imageUrl} alt="user input" />
        </div>
    )
}

export default OutputImage;