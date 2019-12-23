import React from 'react';
import '../assets/css/admin/style.css';
import '../assets/css/admin/colors/blue.css';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <section id="wrapper" className="error-page">
            <div className="error-box">
                <div className="error-body text-center">
                    <h1>404</h1>
                    <h3 className="text-uppercase">Trang không tìm thấy !</h3>
                    <p className="text-muted m-t-30 m-b-30">Trang bạn muốn đến không tồn tại hoặc đã bị gỡ bỏ</p>
                    <Link to="/trang-chu" className="btn btn-info btn-rounded waves-effect waves-light m-b-40">Back to
                        home</Link></div>
                <footer className="footer text-center">© 2019 FPoly eBuy</footer>
            </div>
        </section>
    );
}

export default NotFound;
