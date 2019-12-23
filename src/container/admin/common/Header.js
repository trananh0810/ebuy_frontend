import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <React.Fragment>
            <header className="topbar">
                <nav className="navbar top-navbar navbar-toggleable-sm navbar-light">
                    {/* Logo */}
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html">
                            <b>
                                <img src="../assets/images/logo_ebuy_white.png"
                                     style={{maxHeight: '35px', maxWidth: '100%'}}/>
                            </b>
                        </a>
                    </div>
                    {/* End Logo */}
                    <div className="navbar-collapse">
                        {/* toggle and nav items */}
                        <ul className="navbar-nav mr-auto mt-md-0">
                            <li className="nav-item"><a
                                className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                                ><i className="ti ti-menu"/></a></li>
                        </ul>
                        {/* User profile and search */}
                        <ul className="navbar-nav my-lg-0">
                            {/* ============================================================== */}
                            {/* Profile */}
                            {/* ============================================================== */}
                            <li className="nav-item dropdown">
                                <NavLink to="/quan-ly/ca-nhan" className="nav-link dropdown-toggle text-muted waves-effect waves-dark">
                                    <img src="../assets/images/users/1.jpg" alt="user" className="profile-pic m-r-10"/>
                                    Trần Đức Anh
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    );
}

export default Header;
