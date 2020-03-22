import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setTitle, setHeaderType } from "../../actions/commonActions";
import { searchCoupon, selectCoupon } from "../../actions/couponActions";

@connect((store) => {
  return {
    user: store.userReducer.user,
    router: store.router,
    common: store.commonReducer.common,
    coupon: store.couponReducer.coupon,
  };
})

 export default class Map extends React.Component {
  componentDidMount() {
    this.props.dispatch(setTitle("地図"));
    if(this.props.common.isSelectedCoupon){
      this.props.dispatch(setHeaderType(2));
    }else{
      this.props.dispatch(setHeaderType(1));
    }
    this.props.dispatch(searchCoupon(1));
  }
  detailShop(){
    this.props.dispatch(selectCoupon(this.props.coupon.resultShops[0]));
  }
  detailShopButton(){
    if(!this.props.common.isSelectedCoupon){
      return (
        <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.detailShop.bind(this)}>店舗詳細へ</button>
      );
    }
  }
   render() {
    return (
    <div id="main" className="outer top">
        <div className="inner">
          <p class="font-weight-bold">地図表示</p>
          {this.detailShopButton()}
        </div>
    </div>
    );
   }
 }