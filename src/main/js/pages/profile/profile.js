import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setTitle, detailShopButton ,setHeaderType } from "../../actions/commonActions";

@connect((store) => {
  return {
    user: store.userReducer.user,
    router: store.router,
    common: store.commonReducer.common,
  };
})

 export default class Profile extends React.Component {
   componentDidMount() {
     this.props.dispatch(setTitle("プロフィール編集"));
     this.props.dispatch(setHeaderType(2));
   }
   render() {
    return (
      <div id="main" className="outer top">
          <div className="inner">
            <form className="form">
              <table className="table">
                <tbody>
                  <tr>
                    <th>名前</th>
                    <td><input type="text" id="title" className="form-control"/></td>
                  </tr>
                </tbody>
              </table>
              <button className="btn btn-lg btn-primary btn-block" type="button" >プロフィール変更</button>
            </form>
          </div>
      </div>
    );
   }
 }