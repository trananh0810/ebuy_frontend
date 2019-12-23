import React, {Component} from 'react';
import {Route} from "react-router-dom";
import '../assets/css/admin/common.css';
import '../plugin/bootstrap-admin/css/bootstrap.min.css';
import '../plugin/chartist-js/dist/chartist.min.css';
import '../plugin/chartist-js/dist/chartist-init.css';
import '../plugin/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css';
import '../plugin/c3-master/c3.min.css';
import '../assets/css/admin/style.css';
import '../assets/css/admin/colors/blue.css';
import '../assets/js/admin/jquery.slimscroll';
import '../assets/js/admin/waves';
import '../assets/js/admin/sidebarmenu';
import '../plugin/sticky-kit-master/dist/sticky-kit.min';
import '../assets/js/admin/custom';
// import '../plugin/chartist-js/dist/chartist.min';
// import '../plugin/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip';
import '../plugin/d3/d3.min';
import Header from "../container/admin/common/Header";
import Menu from "../container/admin/common/Menu";
// import '../plugin/c3-master/c3.min';



function RouteWithLayoutAdmin({ component, ...rest }) {
    return (
        <div id="main-wrapper">
            <Header/>

            <Menu/>

            <div className="page-wrapper">
                <div className="container-fluid pt-4">
                    <Route {...rest} render={ () => React.createElement(component) } />
                </div>
                <footer className="footer"> © 2019 FPoly eBuy</footer>
            </div>
        </div>


    );
}

export default RouteWithLayoutAdmin;
