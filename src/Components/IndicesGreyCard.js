import React from 'react';

import AddIndex from '../images/add-index.png';

function IndicesGreyCard(props) {
    return (
        <div className='item'>
            <div className="blog-article">
                <div className="card grey-card">
                    <img onClick={()=>props.ADDTOGGLECLASS()} src={AddIndex} alt="Avatar" />
                    <p>Add Indices</p>
                </div>
            </div>
        </div>
    )
}

export default IndicesGreyCard
