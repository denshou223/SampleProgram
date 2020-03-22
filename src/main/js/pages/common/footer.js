import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { push , replace} from 'connected-react-router';
import { resetCommonInfo } from "../../actions/commonActions";

@connect((store) => {
  return {
    user: store.userReducer.user,
    router: store.router,
    common: store.commonReducer.common
  };
})
 export default class Footer extends React.Component {

   resetLink(url){
     this.props.dispatch(resetCommonInfo());
     this.props.dispatch(replace(url));
   }
   render() {
    return (
    <div className="container fixed-bottom">
        <div className="row">
            <div className="col-12">
              <div className="btn-group d-flex py-2">
                <Link to='/' className="btn btn-info w-100" onClick={this.resetLink.bind(this, '/')}>地図</Link>
                <Link to='/pay' className="btn btn-warning w-100" onClick={this.resetLink.bind(this, '/pay')}>支払い</Link>
                <Link to='/coupon' className="btn btn-danger w-100" onClick={this.resetLink.bind(this, '/coupon')}>クーポン</Link>
              </div>
            </div>
        </div>
    </div>
    );
   }
 }