import React, {useEffect} from 'react';
import '../../../assets/css/index.css';
import {createSlideCard} from '../../../assets/js/index.js';
import CardCate from "../../../components/CardCate";
import CardProduct from "../../../components/CardProduct";


function Home() {
    let contextPath = window.location.origin;

    useEffect (() => {
        createSlideCard();
    }, []);

    return (
        <React.Fragment>
            {/*Banner*/}
            <section className="sec-banner">
                <img className="img-fluid" src={`${contextPath}/assets/images/sng-archive-banner.webp`} alt=""/>
            </section>
            {/*End banner*/}

            {/*Category*/}
            <section id="sec-cate" className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="btn btn-info rounded-custom">
                                DANH MỤC HÀNG HÓA
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="swiper-container p-3">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <CardCate/>
                                    </div>
                                    <div className="swiper-slide">
                                        <CardCate/>
                                    </div>
                                    <div className="swiper-slide">
                                        <CardCate/>
                                    </div>
                                    <div className="swiper-slide">
                                        <CardCate/>
                                    </div>
                                    <div className="swiper-slide">
                                        <CardCate/>
                                    </div>
                                </div>
                                {/* Add Pagination */}
                                <div className="swiper-pagination" style={{bottom: 0}}/>
                                {/* Add Arrows */}
                                <div className="swiper-button swiper-button-next"/>
                                <div className="swiper-button swiper-button-prev"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Category*/}

            {/*List product by cate*/}
            <section className="mt-2">
                <div className="container">
                    <div className="row mt-2 px-3">
                        <div className="col-12">
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="btn btn-info rounded-custom mb-2">
                                BIA RƯỢU
                            </div>
                            <p className="m-0"><i>Lựa chọn thông minh dành cho phái mạnh</i></p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="swiper-container p-3">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <CardProduct/>
                                    </div>
                                    <div className="swiper-slide">
                                        <CardProduct/>
                                    </div>
                                    <div className="swiper-slide">
                                        <CardProduct/>
                                    </div>
                                    <div className="swiper-slide">
                                        <CardProduct/>
                                    </div>
                                    <div className="swiper-slide">
                                        <CardProduct/>
                                    </div>
                                    <div className="swiper-slide">
                                        <CardProduct/>
                                    </div>
                                </div>
                                {/* Add Pagination */}
                                <div className="swiper-pagination" style={{bottom: 0}}/>
                                {/* Add Arrows */}
                                <div className="swiper-button swiper-button-next"/>
                                <div className="swiper-button swiper-button-prev"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End List product by cate*/}
        </React.Fragment>
    )
}

export default Home;
