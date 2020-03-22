import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { fetchTweets} from "../actions/tweetsActions";
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Header from "./common/header";
import Footer from "./common/footer";
import Map from "./map/map";
import Profile from "./profile/profile";
import Pay from "./pay/pay";
import PayConfirm from "./pay/payConfirm";
import PayFinish from "./pay/payFinish";
import Coupon from "./coupon/coupon";
import CouponList from "./coupon/couponList";
import CouponDetail from "./coupon/couponDetail";
import Charge from "./charge/charge";

@connect((store) => {
  return {
    user: store.userReducer.user,
    router: store.router,
    common: store.commonReducer.common,
  };
})

 export default class Layout extends React.Component {
   render() {
    return (
      <div>
        <Header/>
        <div>
          <Switch>
            <Route exact path="/" component={Map} />
            <Route path="/profile" component={Profile} />
            <Route path="/pay" component={Pay} />
            <Route path="/payConfirm" component={PayConfirm} />
            <Route path="/payFinish" component={PayFinish} />
            <Route path="/coupon" component={Coupon} />
            <Route path="/couponList" component={CouponList} />
            <Route path="/couponDetail" component={CouponDetail} />
            <Route path="/charge" component={Charge} />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
   }
 }


