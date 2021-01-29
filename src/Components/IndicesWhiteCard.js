import React, { Component } from 'react';

import ellipsis from '../images/ellipsis.png';

export class IndicesWhiteCard extends Component {
    render() {
        return (
            <div className='item'>
                <div className="blog-article">
                    <div className="card white-card">
                        <div className="align-icons">
                            <p>Facilities Management - Market Size Estimate - Europe, North America and MEA</p>
                            <img onClick={() => this.props.TOGGLECLASS('id02', this.props.INDEX)} src={ellipsis} alt="ellipsis" />
                        </div>
                        <div className="img-resize"><img src={this.props.INDICES.image} alt="Avatar" /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndicesWhiteCard