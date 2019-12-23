import React, {Component} from 'react';
import CardProduct from "../../../components/CardProduct";
import {Pagination} from "antd";
import 'antd/dist/antd.css';
import '../../../assets/css/products.css';

let contextPath = window.location.origin;

function Products() {
    return (
        <React.Fragment>
            {/*Banner*/}
            <section className="sec-banner">
                <img className="img-fluid" src={`${contextPath}/assets/images/sng-archive-banner.webp`} alt=""/>
            </section>
            {/*End banner*/}

            <section id="sec-content" className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-12 offset-md-4 offset-sm-3 offset-0">
                            <div className="form-group">
                                <select className="custom-select" defaultValue="all">
                                    <option value="all">Tất cả sản phẩm</option>
                                    <option value="1">Danh mục 1</option>
                                    <option value="2">Danh mục 1</option>
                                    <option value="3">Danh mục 1</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* list product */}
                    <div className="row mt-2">
                        <div className="col-md-3 col-sm-4 col-6 mb-3">
                            <CardProduct/>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 mb-3">
                            <CardProduct/>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 mb-3">
                            <CardProduct/>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 mb-3">
                            <CardProduct/>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 mb-3">
                            <CardProduct/>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 mb-3">
                            <CardProduct/>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 mb-3">
                            <CardProduct/>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6 mb-3">
                            <CardProduct/>
                        </div>
                    </div>
                    {/* end list product */}
                    {/* paging */}

                    <div className="row">
                        <div className="col-12 text-center">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                    {/* end paging */}
                </div>
            </section>
        </React.Fragment>
    );
}

export default Products;
