import React, { Component } from 'react';

import AddIndex from '../images/add-index.png';

export class IndicesGreyCard extends Component {
    render() {
        return (
            <div className='item'>
                <div className="blog-article">
                    <div className="card grey-card">
                        <img onClick={() => this.props.TOGGLECLASS('id01')} src={AddIndex} alt="Avatar"/>
                        <p>Add Indices</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndicesGreyCard
