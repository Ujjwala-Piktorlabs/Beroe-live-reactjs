import React from 'react'

const Sidebar = (props) =>
    <div className={`sidebar ${props.sidebarShow}`} onClick={(event) => props.TOGGLESIDEBAR(event,false)} id="right-menu">
        <button id="side-bar-close" onClick={props.TOGGLESIDEBAR} className="btn">Close &times;</button>
    </div>

export default Sidebar