import React, {Component} from 'react';

const contextPath = window.location.origin;

function Footer() {
    return (
        <section id="sec-footer" className="mt-5">
            <div className="container-fluid">
                <div className="row h-100">
                    <div className="col-12 d-flex flex-row justify-content-center align-items-center">
                        <img className="mr-3" src={`${contextPath}/assets/images/logo_ebuy_white.png`} alt=""/>
                        <p className="text-white mb-0">Copyright © 2019 by FPoly eBuy</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
