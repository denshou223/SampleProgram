import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setTitle, setHeaderType, setIsSelectedCoupon } from "../../actions/commonActions";

@connect((store) => {
  return {
    user: store.userReducer.user,
    router: store.router,
    common: store.commonReducer.common,
    coupon: store.couponReducer.coupon,
  };
})

 export default class CouponDetail extends React.Component {
   componentDidMount() {
     this.props.dispatch(setTitle(this.props.coupon.selectShop.shopName));
     this.props.dispatch(setHeaderType(2));
     this.props.dispatch(setIsSelectedCoupon(true));
   }
   render() {

    const mappedCoupons = this.props.coupon.selectShop.coupons.map(coupon => <li>{coupon.couponName}：{coupon.couponValue}</li>);

    return (
    <div id="main" class="outer top">
        <div class="inner">
            <Link to="/" className="btn btn-lg btn-primary btn-block">ここに行く</Link>
            <Link to="/pay" className="btn btn-lg btn-primary btn-block">支払う</Link>
         　 <h3>マイクーポン</h3>
            <ul class="list">
              {mappedCoupons}
            </ul>
         　 <h3>店舗情報</h3>
            <table class="table">
              <tbody>
                <tr>
                  <th>住所</th>
                  <td><p>{this.props.coupon.selectShop.shopAddress}</p></td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
    );
   }
 }