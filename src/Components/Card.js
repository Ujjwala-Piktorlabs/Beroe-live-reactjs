import React, { useState } from 'react';

import building from '../images/building.jpg';
import greystar from '../images/grey-star.png';
import comments from '../images/comments.png';
import download from '../images/download-icon.png';
import chevron from '../images/chevron.png';

function Card(props) {
    // props destructuring
    const { title, id } = props.BLOG
    // More-Less text state
    const [Text, setText] = useState({
        textClass: 'max-lines',
        text: "More"
    })
    const { textClass, text } = Text
    // Display more-less text for Blog-Article
    const morelessToggleClass = () => {
        if (textClass === 'max-lines') {
            setText({ textClass: '', text: "Less" })
        } else {
            setText({ textClass: 'max-lines', text: "More" })
        }
    }

    return (
        <div className="card">
            <h4>{title}</h4>
            <img src={building} alt="Avatar" />
            <div className="container">
                <div className="inner-container">
                    <div className="card-header">
                        <h4><b>La Nina to have a positive impact on key Indian crop.</b></h4>
                        <p className="blog-author">Sunil Shah | 2 August 2016</p>
                        <p className={`blog-content ${textClass} show-text`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel voluptatem dolorum veritatis modi, quas deserunt magnam accusamus atque molestias dicta in eos. Rerum alias repudiandae numquam repellendus dignissimos? Numquam voluptates quidem itaque. Quae delectus aspernatur consequuntur enim, voluptas vitae perspiciatis iste consequatur beatae! Amet soluta veniam fugiat nam praesentium!</p>
                    </div>
                    <div className="card-footer">
                        <div className="align-icons">
                            <img className="star-size" src={greystar} alt="grey-star" />
                            <p className="icons-size" >5</p>
                            <div className="vl"></div>
                            <img className="star-size" src={comments} alt="comments-icon" />
                            <p className="icons-size" >15 K</p>
                            <div className="vl"></div>
                            {props.INDEX !== 0 && <img className="down-size" src={download} alt="download-icon" />}
                        </div>
                        <div className="align-more">
                            <a href='#' className="change-link-text" id={id} onClick={morelessToggleClass}>{text}</a>
                            <img className="align-more-icon" src={chevron} alt=">" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card