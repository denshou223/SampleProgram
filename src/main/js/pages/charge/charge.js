import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setTitle, setHeaderType } from "../../actions/commonActions";
import { chargeExecution } from "../../actions/chargeActions";

@connect((store) => {
  return {
    user: store.userReducer.user,
    router: store.router,
    common: store.commonReducer.common,
  };
})

 export default class Charge extends React.Component {
   componentDidMount() {
     this.props.dispatch(setTitle("チャージ"));
     this.props.dispatch(setHeaderType(2));
   }
   chargeExecution(){
     this.props.dispatch(chargeExecution(this.state.chargeAmount));
   }
   handleChange (event) {
        let chargeAmount;

        // eventが発火したname属性名ごとに値を処理
        switch (event.target.name) {
            case 'chargeAmount':
                chargeAmount = event.target.value;
                break;
        }

        // 状態を更新
        this.setState({
            chargeAmount: chargeAmount
        });
  }
   render() {
    return (
    <div id="main" class="outer top">
        <div class="inner">
          <form class="form-signin">
            <table class="table">
              <tbody>
                <tr>
                  <th>チャージ残高</th>
                  <td><p id="chargeBalance">{this.props.user.chargeBalance}</p></td>
                </tr>
                <tr>
                  <th>チャージ金額</th>
                  <td><input type="text" name="chargeAmount" id="chargeAmount" className="form-control" onChange={this.handleChange}/></td>
                </tr>
              </tbody>
            </table>
            <button class="btn btn-lg btn-primary btn-block" type="button" onClick={this.chargeExecution.bind(this)}>チャージ</button>
          </form>
        </div>
    </div>
    );
   }
 }