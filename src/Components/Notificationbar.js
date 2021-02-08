import React from 'react'

function Notificationbar(props) {
    return (
        <div className={`noti-card ${props.notiShow}`} onClick={(event) => props.TOGGLENOTIBAR(event,false)} id="noti-toggle">
            <div className='arrow_box'>
                <h3>Notifications</h3>
                <button id="notification-close" className="btn" onClick={props.TOGGLENOTIBAR}>Close &times;</button>
            </div>
        </div>
    )
}

export default Notificationbar