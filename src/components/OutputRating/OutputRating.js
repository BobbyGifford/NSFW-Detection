import React from 'react';

const OutputRating = ({ nsfwRating, sfwRating}) => {
    return (
        <div className='mt-3'>
            <p>NSFW Rating: {Math.round(nsfwRating * 100)}%</p>
            <p>SFW Rating: {Math.round(sfwRating * 100)}%</p>
        </div>
    )
}

export default OutputRating;