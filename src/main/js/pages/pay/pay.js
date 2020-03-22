import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { setTitle, setHeaderType } from "../../actions/commonActions";
import { payConfirmAction } from "../../actions/payActions";
import { countUpTransitionCount ,  countDownTransitionCount} from "../../actions/commonActions";

@connect((store) => {
  return {
    user: store.userReducer.user,
    router: store.router,
    common: store.commonReducer.common,
  };
})

export default class Pay extends React.Component {
   componentDidMount() {
     this.props.dispatch(setTitle("支払い"));
     if(this.props.common.isSelectedCoupon){
       this.props.dispatch(setHeaderType(2));
     }else{
       this.props.dispatch(setHeaderType(1));
     }
   }
   openModal() {
     $('#exampleModalCenter').modal('show');
   }
   closeModal() {
     $('#exampleModalCenter').modal('hide');
   }
   qrRead() {
     $('#exampleModalCenter').modal('hide');
     this.props.dispatch(payConfirmAction());
   }
   render() {

    return (
    <div>
      <div id="main" className="outer top">
          <div className="inner">
            <form className="form-signin">
              <table className="table">
                <tbody>
                  <tr>
                    <th>チャージ金額</th>
                    <td><p>3000</p></td>
                  </tr>
                </tbody>
              </table>
              <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.openModal.bind(this)}>QRコード読み取り</button>
              <Link to="/charge" className="btn btn-lg btn-info btn-block" type="submit">チャージ</Link>
            </form>
          </div>

          <div className="modal fade" id="exampleModalCenter" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">QRコード読み取り</h5>
                  <button type="button" className="close" ia-label="閉じる" onClick={this.closeModal.bind(this)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p><button className="btn btn-lg btn-info btn-block" type="button" onClick={this.qrRead.bind(this)}>お支払い確認へ</button></p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    );
   }
 }