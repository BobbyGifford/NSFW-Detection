import React from 'react';

const OutputRating = ({ firstIndexName, firstIndexValue, secondIndexName, secondIndexValue}) => {
    return (
        <div className='mt-3'>
            <p>{firstIndexName} rating: {Math.round(firstIndexValue * 100)}%</p>
            <p>{secondIndexName} rating: {Math.round(secondIndexValue * 100)}%</p>
        </div>
    )
}

export default OutputRating;