import React from "react";
import { connect } from "react-redux";
import { Link , withRouter} from "react-router-dom";
import { setTitle, setHeaderType } from "../../actions/commonActions";
import { push , replace , go } from 'connected-react-router'

@connect((store) => {
  return {
    user: store.userReducer.user,
    router: store.router,
    common: store.commonReducer.common,
  };
})

 export default class PayFinish extends React.Component {
   componentDidMount() {
     this.props.dispatch(setTitle("支払い完了"));
     this.props.dispatch(setHeaderType(1));
   }
   back(){
     this.props.dispatch(go(-2));
   }
   render() {
    return (
    <div id="main" class="outer top">
        <div class="inner">
            <p class="font-weight-bold">支払い完了</p>
            <table class="table">
              <tbody>
                <tr>
                  <th>チャージ残高金額</th>
                  <td><p>{this.props.user.chargeBalance}</p></td>
                </tr>
              </tbody>
            </table>
            <Link to="/charge" className="btn btn-lg btn-info btn-block">チャージ</Link>
            <button className="btn btn-lg btn-primary btn-block" onClick={this.back.bind(this)}>前の画面に戻る</button>
        </div>
    </div>
    );
   }
 }