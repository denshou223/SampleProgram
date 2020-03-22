import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { push , replace , go } from 'connected-react-router'
import { setTitle, setHeaderType } from "../../actions/commonActions";
import { payExecustionAction } from "../../actions/payActions";

@connect((store) => {
  return {
    user: store.userReducer.user,
    router: store.router,
    common: store.commonReducer.common,
    pay: store.payReducer.pay
  };
})
 export default class PayConfirm extends React.Component {
   componentDidMount() {
     this.props.dispatch(setTitle("支払い内容確認"));
     this.props.dispatch(setHeaderType(2));
   }
   executionPay(){
     this.props.dispatch(payExecustionAction()); 
   }
   cancel(){
     this.props.dispatch(go(-1)); 
   }
   render() {
    console.log(this.props)

    const mappedCoupons = this.props.pay.coupons.map(coupon => <tr><th>{coupon.couponName}</th><td><p>{coupon.couponValue}</p></td></tr>);
    return (
    <div id="main" className="outer top">
        <div className="inner">
          <form className="form-signin">
            <table className="table">
              <tbody>
                <tr>
                  <th>ご利用金額</th>
                  <td><p>{this.props.pay.usageAmount}</p></td>
                </tr>
                {mappedCoupons}
                <tr>
                  <th>お支払い金額</th>
                  <td><p>{this.props.pay.paymentAmount}</p></td>
                </tr>
              </tbody>
            </table>
            <Link to="/charge" className="btn btn-lg btn-info btn-block">チャージ</Link>
            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.executionPay.bind(this)}>支払いする</button>
            <Link to="/pay" className="btn btn-lg btn-danger btn-block" onClick={this.cancel.bind(this)}>キャンセル</Link>
          </form>
        </div>
    </div>
    );
   }
 }