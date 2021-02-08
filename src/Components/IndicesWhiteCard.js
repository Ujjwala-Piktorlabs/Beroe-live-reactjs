import React from 'react';

import ellipsis from '../images/ellipsis.png';

function IndicesWhiteCard(props) {
    return (
        <div className='item'>
            <div className="blog-article">
                <div className="card white-card">
                    <div className="align-icons">
                        <p>Facilities Management - Market Size Estimate - Europe, North America and MEA</p>
                        <img onClick={() => props.DELTOGGLECLASS(props.INDEX)} src={ellipsis} alt="ellipsis" />
                    </div>
                    <div className="img-resize"><img src={props.INDICES.image} alt="Avatar" /></div>
                </div>
            </div>
        </div>
    )
}

export default IndicesWhiteCard