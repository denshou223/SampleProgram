import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setTitle, getCategorys, setHeaderType } from "../../actions/commonActions";
import { searchCoupon, selectCoupon } from "../../actions/couponActions";


@connect((store) => {
  return {
    user: store.userReducer.user,
    router: store.router,
    common: store.commonReducer.common,
    coupon: store.couponReducer.coupon,
  };
})

 export default class Coupon extends React.Component {
   componentDidMount() {
     this.props.dispatch(setTitle("クーポン"));
     this.props.dispatch(setHeaderType(1));
     this.props.dispatch(getCategorys());
   }
   clickCategory(categoryId){
     this.props.dispatch(searchCoupon(categoryId));
   }
   selectShop(shop){
    this.props.dispatch(selectCoupon(shop));
   }
   render() {
    const mappedCoupons = this.props.common.categorys.map(category => <li key={category.categoryId}><span className="btn btn-lg btn-primary" onClick={this.clickCategory.bind(this,category.categoryId)}>{category.categoryName}</span></li>);

    const mappedShops = this.props.coupon.resultShops.map(shop => <li><button className="btn btn-lg btn-info" onClick={this.selectShop.bind(this,shop)}>{shop.shopName}</button></li>);
    return (
    <div id="main" class="outer top">
        <div class="inner">
            <ul class="list">
              <li><Link to="/couponDetail">クーポン</Link></li>
            </ul>
         　 <h3 class="font-weight-bold">カテゴリ</h3>
            <ul class="list">
              {mappedCoupons}
            </ul>
         　 <h3 class="font-weight-bold">カテゴリに対するクーポン</h3>
            <ul class="list">
              {mappedShops}
            </ul>
        </div>
    </div>
    );
   }
 }