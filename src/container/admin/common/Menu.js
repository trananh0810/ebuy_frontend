import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <aside className="left-sidebar">
            <style
                dangerouslySetInnerHTML={{__html: "a.active {background-color: #1e88e5!important;color: white!important;}#sidebarnav a:hover{background-color: #1e88e5;color: white;transition:0.3s}"}}/>
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li>
                            <NavLink exact to="/quan-ly/tai-khoan" className="waves-effect waves-dark" aria-expanded="false">
                                <span className="hide-menu">Quản lý tài khoản</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/quan-ly/danh-muc" className="waves-effect waves-dark" aria-expanded="false">
                                <span className="hide-menu">Quản lý danh mục</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/quan-ly/san-pham" className="waves-effect waves-dark" aria-expanded="false">
                                <span className="hide-menu">Quản lý sản phẩm</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/quan-ly/don-hang" className="waves-effect waves-dark" aria-expanded="false">
                                <span className="hide-menu">Quản lý đơn hàng</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="sidebar-footer d-flex justify-content-center align-items-center" style={{height: '35px'}}>
                <i className="ti ti-power-off" data-toggle="tooltip" title="Logout" data-placement="auto"/>
            </div>
        </aside>
    );
}

export default Menu;
