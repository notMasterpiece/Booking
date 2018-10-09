import React from 'react';

const Spinner = () => {
    return (
        <div className='loader_wrap'>
            <div className="loader">
                <div className="loader__bar" />
                <div className="loader__bar" />
                <div className="loader__bar" />
                <div className="loader__bar" />
                <div className="loader__bar" />
                <div className="loader__ball" />
            </div>
        </div>
    );
};

export default Spinner;
