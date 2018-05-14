import React from 'react';

import "./Instructions.css"

const Instructions = () => {
    return (
        <div className='mx-5'>
            <p className='my-1'>How To Use:</p>
            <hr />
            <p className='my-1'>1. Search for images using Google images.  </p>
            <p className='my-1'>2. Right click on your desired image.</p>
            <p className='my-1'>3. Select <span className="font-weight-bold text-uppercase">"Copy <u>Image Address</u>".</span></p>
            <p className='my-1'>4. Paste Image Address into input then click submit.</p>
        </div>
    )
}

export default Instructions;