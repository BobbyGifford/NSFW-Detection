import React from 'react';

const InputField = ({ onSubmit, onChange }) => {
    return (
        <div className='container mt-3'>
        <form onSubmit={onSubmit}>
            <input required className='form-control' type='text' onChange={onChange} />
            <input className='mt-3 btn btn-info' type='submit' value="Scan" />
        </form>
        </div>
    )
}

export default InputField;