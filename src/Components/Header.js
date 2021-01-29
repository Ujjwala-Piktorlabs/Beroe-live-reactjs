import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Notificationbar from './Notificationbar';

import logo from '../images/beroe-live-logo.png';
import search from '../images/search-purple.png';
import notification from '../images/notification-icon.png'
import whitecircle from '../images/white-circle2.png';
import askberoe from '../images/ask-beroe.png';

export class Header extends Component {
    navActiveClass = (e) => {
        let el = document.getElementById(e.target.id)
        let current = document.querySelectorAll(".nav-active");
        current.forEach((ele) => {
            ele.classList.remove('nav-active')
        })
        el.classList.add("nav-active")
    }

    TOGGLEBAR = (e, param, status = true) => {
        let x = document.getElementById(param)
        if (status) {
            if (x.classList.contains('shown')) {
                if (param === 'right-menu') {
                    x.classList.remove('animate-right')
                    x.classList.add('animate-left')
                } else if (param === 'noti-toggle') {
                    x.classList.remove('animate-top')
                    x.classList.add('animate-bottom')
                }
            } else {
                if (param === 'right-menu') {
                    console.log(param);
                    x.classList.add('animate-right')
                    x.classList.remove('animate-left')
                } else if (param === 'noti-toggle') {
                    x.classList.add('animate-top')
                    x.classList.remove('animate-bottom')
                }
            }
            x.classList.toggle('shown')
        }
        e.stopPropagation()
    }

    render() {
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
                                <img src={notification} onClick={(event) => this.TOGGLEBAR(event, 'noti-toggle')} alt="noti-icon" /></a>
                            </span>
                            <span><a className="align-li" href="#">
                                <img src={whitecircle} alt="white-circle" /><b>Hi John!</b></a>
                            </span>
                            <span onClick={(event) => this.TOGGLEBAR(event, 'right-menu')} id="ask-beroe"><a className="align-li side-bar-open" href="#">
                                <img className="side-bar-open" src={askberoe} alt="ask-beroe" /><b className="side-bar-open">Ask Beroe</b></a>
                            </span>
                        </div>
                    </div>
                </nav>
                <nav id="navbar-tail">
                    <ul>
                        <li><a id="dashboard" className="nav-active" href="#" onClick={this.navActiveClass}>Dashboard</a></li>
                        <li><a id="discussions" href="#" onClick={this.navActiveClass}>Discussions</a></li>
                        <li><a id="interesting-reads" href="#" onClick={this.navActiveClass}>Interesting Reads</a></li>
                    </ul>
                    <a id="customised-reports" href="#" onClick={this.navActiveClass}>Customised Reports</a>
                </nav>
                <Sidebar TOGGLESIDEBAR={this.TOGGLEBAR} />
                <Notificationbar TOGGLENOTIBAR={this.TOGGLEBAR} />
            </div>
        )
    }
}

export default Header