import React, { Component } from 'react';
import SectionsTable from './SectionsTable';

import whitecaret from '../images/caret-circle-white.png';
import star from '../images/star.png';
import greystar from '../images/grey-star.png';
import share from '../images/share-icon.png';
import clipboard from '../images/clipboard.png';

export class HomeRightDiv extends Component {
    render() {
        return (
            <div>
                <div className="home-right-content">
                    <div className="home-content-div">
                        <p className="primary-color">MARKETING MATERIALS</p>
                        <p>Commercial & <br/> Reminder Items <img src={whitecaret} alt="caret-circle-white"/></p>
                        <div className="align-icons">
                            <img className="star-size" src={star} alt="star"/>
                            <img className="star-size" src={star} alt="star"/>
                            <img className="star-size" src={star} alt="star"/>
                            <img className="star-size" src={star} alt="star"/>
                            <img className="star-size" src={greystar} alt="grey-star"/>
                            <img src={share} alt="share"/>
                            <img src={clipboard} alt="clipboard"/>
                        </div>
                    </div>
                    <SectionsTable />
                </div>
            </div>
        )
    }
}

export default HomeRightDiv
