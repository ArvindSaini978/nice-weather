import React from 'react';
import './ErrorOccured.css'

export default function ErrorOccured() {


    return (
        <div className='absolute top-0 left-0 z-[999] w-full h-[100vh] bg-[#f0f0f0]'>
            <div className="page-404">
                <div className="outer">
                    <div className="middle">
                        <div className="inner">
                            {/* BEGIN CONTENT */}
                            <div className="inner-circle"><i className="fa fa-cogs"></i><span>500</span></div>
                            <span className="inner-status">Opps! Internal Server Error!</span>
                            <span className="inner-detail">Unfortunately we're having trouble loading the page you are looking for. Please come back in a while.</span>
                            {/* END CONTENT */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
