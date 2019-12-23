import React, {Component, Suspense} from 'react';
import Loading from "../container/customer/common/Loading";
import {Redirect, Route, Switch} from "react-router-dom";
import ManageAccount from "../container/admin/manageAccount/ManageAccount";
import RouteWithLayoutAdmin from "./RouteWithLayoutAdmin";
import ManageCategory from "../container/admin/manageCategory/ManageCategory";
import ManageProduct from "../container/admin/manageProduct/ManageProduct";
import ManageOrder from "../container/admin/manageOrder/ManageOrder";
import Profile from "../container/admin/profile/Profile";

const Home = React.lazy(() => import('../container/customer/home/Home'));
const Header = React.lazy(() => import('../container/customer/common/Header'));
const Footer = React.lazy(() => import('../container/customer/common/Footer'));
const ModalLogin = React.lazy(() => import('../container/customer/common/ModalLogin'));
const Introduction = React.lazy(() => import('../container/customer/intro/Introduction'));
const Products = React.lazy(() => import('../container/customer/products/Products'));
const NotFound = React.lazy(() => import('../container/NotFound'));

const RouteWithLayoutCustomer = ({ component, ...rest }) => {
    // const userLogin = useSelector(state => state.userLoginReducer);
    return (
        <React.Fragment>
            <Header/>

            <Route {...rest} render={ () => React.createElement(component) } />

            <Footer/>

            <ModalLogin/>
        </React.Fragment>
    );
};

function RouterApp() {
    return (
        <Suspense fallback={<Loading/>}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/trang-chu"/>
                </Route>
                <RouteWithLayoutCustomer exact path="/trang-chu" component={Home} />
                <RouteWithLayoutCustomer exact path="/san-pham" component={Products} />
                <RouteWithLayoutCustomer exact path="/gioi-thieu" component={Introduction} />

                <Route exact path="/quan-ly">
                    <Redirect to="/quan-ly/tai-khoan"/>
                </Route>
                <RouteWithLayoutAdmin exact path="/quan-ly/tai-khoan" component={ManageAccount} />
                <RouteWithLayoutAdmin exact path="/quan-ly/danh-muc" component={ManageCategory} />
                <RouteWithLayoutAdmin exact path="/quan-ly/san-pham" component={ManageProduct} />
                <RouteWithLayoutAdmin exact path="/quan-ly/don-hang" component={ManageOrder} />
                <RouteWithLayoutAdmin exact path="/quan-ly/ca-nhan" component={Profile} />

                <Route component={NotFound}/>
            </Switch>
        </Suspense>
    )
}

export default RouterApp;
