import React, {Component} from 'react';

function CardProduct() {
    return (
        <div className="card card-product card-custom rounded-custom overflow-hidden text-center">
            <div className="card-body p-0">
                <div className="images">
                    <img className="card-img-top" src="./assets/images/9551276638238.webp" alt=""/>
                    <img className="card-img-top" src="./assets/images/chart.png" alt=""/>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text" data-toggle="tooltip" title="Dầu gội, sữa tắm nam XMEN ">
                    Dầu gội, sữa tắm nam XMEN
                </p>
            </div>
        </div>
    )
}

export default CardProduct;
