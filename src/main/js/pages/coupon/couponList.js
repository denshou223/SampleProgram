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

 export default class CouponList extends React.Component {
   componentDidMount() {
     this.props.dispatch(setTitle("クーポン一覧"));
     this.props.dispatch(setHeaderType(2));
     this.props.dispatch(searchCoupon(1));
   }
   selectShop(shop){
    this.props.dispatch(selectCoupon(shop));
   }
   render() {
    const mappedShops = this.props.coupon.resultShops.map(shop => <li><button onClick={this.selectShop.bind(this,shop)}>{shop.shopName}</button></li>);
    return (
    <div id="main" class="outer top">
        <div class="inner">
         　 <h3 class="font-weight-bold">クーポンリスト</h3>
            <ul class="list">
              {mappedShops}
            </ul>
        </div>
    </div>
    );
   }
 }