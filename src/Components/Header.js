import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Notificationbar from './Notificationbar';

import logo from '../images/beroe-live-logo.png';
import search from '../images/search-purple.png';
import notification from '../images/notification-icon.png'
import whitecircle from '../images/white-circle2.png';
import askberoe from '../images/ask-beroe.png';

function Header() {
    const [ActiveNav, setActiveNav] = useState({
        activeNav0: 'nav-active',
        activeNav1: '',
        activeNav2: '',
        activeNav3: '',
    })
    const { activeNav0, activeNav1, activeNav2, activeNav3 } = ActiveNav

    const navActiveClass = (id) => {
        if (id === 'discussions') {
            setActiveNav({ activeNav0: '', activeNav1: 'nav-active', activeNav2: '', activeNav3: '' })
        } else if (id === 'interesting-reads') {
            setActiveNav({ activeNav0: '', activeNav1: '', activeNav2: 'nav-active', activeNav3: '' })
        } else if (id === 'customised-reports') {
            setActiveNav({ activeNav0: '', activeNav1: '', activeNav2: '', activeNav3: 'nav-active' })
        } else {
            setActiveNav({ activeNav0: 'nav-active', activeNav1: '', activeNav2: '', activeNav3: '' })
        }
    }

    // state to toggle notification bar
    const [Noti, setNoti] = useState({
        notiShow: 'hidden animate-bottom'
    })
    const { notiShow } = Noti
    // Display & toggle notification bar
    const NOTITOGGLE = (e, divShow = true) => {
        if (divShow) {
            if (notiShow === 'hidden animate-bottom') {
                setNoti({ notiShow: 'shown animate-top' })
            } else {
                setNoti({ notiShow: 'hidden animate-bottom' })
            }
        }
        e.stopPropagation()
    }
    // state to toggle side bar
    const [SideBar, setSideBar] = useState({
        sidebarShow: 'hidden animate-left'
    })
    const { sidebarShow } = SideBar
    // Display & toggle side bar
    const SIDEBARTOGGLE = (e, divShow = true) => {
        if (divShow) {
            if (sidebarShow === 'hidden animate-left') {
                setSideBar({ sidebarShow: 'shown animate-right' })
            } else {
                setSideBar({ sidebarShow: 'hidden animate-left' })
            }
        }
        e.stopPropagation()
    }

    return (
        <div id='header'>
            <nav id="navbar-head">
                <div>
                    <img src={logo} alt="beroe-logo" />
                </div>
                <div className="navbar-head-right">
                    <div id="search-bar">
                        <input className="search-style" type="text" placeholder="Search" />
                        <img className="search-img" src={search} alt="search-icon" />
                    </div>
                    <div className="align-span">
                        <span><a className="align-li" id="dropdown" href="#">
                            <img src={notification} onClick={NOTITOGGLE} alt="noti-icon" /></a>
                        </span>
                        <span><a className="align-li" href="#">
                            <img src={whitecircle} alt="white-circle" /><b>Hi John!</b></a>
                        </span>
                        <span onClick={SIDEBARTOGGLE} id="ask-beroe"><a className="align-li side-bar-open" href="#">
                            <img className="side-bar-open" src={askberoe} alt="ask-beroe" /><b className="side-bar-open">Ask Beroe</b></a>
                        </span>
                    </div>
                </div>
            </nav>
            <nav id="navbar-tail">
                <ul> 
                    <li><a id="dashboard" className={`${activeNav0}`} href="#" onClick={() => navActiveClass('dashboard')}>Dashboard</a></li>
                    <li><a id="discussions" className={`${activeNav1}`} href="#" onClick={() => navActiveClass('discussions')}>Discussions</a></li>
                    <li><a id="interesting-reads" className={`${activeNav2}`} href="#" onClick={() => navActiveClass('interesting-reads')}>Interesting Reads</a></li>
                </ul>
                <a id="customised-reports" className={`${activeNav3}`} href="#" onClick={() => navActiveClass('customised-reports')}>Customised Reports</a>
            </nav>
            <Sidebar TOGGLESIDEBAR={SIDEBARTOGGLE} sidebarShow={sidebarShow} />
            <Notificationbar TOGGLENOTIBAR={NOTITOGGLE} notiShow={notiShow} />
        </div>
    )
}

export default Header