import React, { Component } from 'react'

export class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className='sidebar hidden' onClick={(event) => this.props.TOGGLESIDEBAR(event, 'right-menu', false)}  id="right-menu">
                    <button id="side-bar-close" onClick={(event) => this.props.TOGGLESIDEBAR(event, 'right-menu')} className="btn">Close &times;</button>
                </div>
            </div>
        )
    }
}

export default Sidebar