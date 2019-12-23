import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

const contextPath = window.location.origin;

function Header() {
    return (
        <section id="sec-header" className="animated">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
                            <Link className="navbar-brand" to="/trang-chu">
                                <img id="img-logo" src={`${contextPath}/assets/images/logo_ebuy.png`} alt=""/>
                            </Link>
                            <button className="navbar-toggler d-lg-none rounded-custom" type="button"
                                    data-toggle="collapse" data-target="#collapsibleNavId"
                                    aria-controls="collapsibleNavId" aria-expanded="false"
                                    aria-label="Toggle navigation" style={{outline: 'none', borderColor: '#17a2b8'}}>
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/trang-chu">Trang chủ</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/san-pham">Sản phẩm</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link" to="/gioi-thieu">Giới thiệu</NavLink>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2 rounded-custom" type="search"
                                           placeholder="Tìm kiếm" required/>
                                </form>
                                <div className="btn btn-info rounded-custom" data-toggle="modal"
                                     data-target="#modalLogin">
                                    Đăng nhập
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;
