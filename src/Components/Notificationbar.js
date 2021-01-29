import React, { Component } from 'react'

export class Notificationbar extends Component {
    render() {
        return (
            <div>
                <div className='noti-card hidden'  onClick={(event) => this.props.TOGGLENOTIBAR(event, 'noti-toggle', false)}  id="noti-toggle">
                    <div className={`arrow_box ${this.props.notificationToggle}`}>
                        <h3>Notifications</h3>
                        <button id="notification-close" className="btn" onClick={(event) => this.props.TOGGLENOTIBAR(event, 'noti-toggle')}>Close &times;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notificationbar