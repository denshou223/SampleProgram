import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { push , replace} from 'connected-react-router'
import { setIsSelectedCoupon } from "../../actions/commonActions";

@connect((store) => {
  return {
    user: store.userReducer.user,
    router: store.router,
    common: store.commonReducer.common
  };
})
class Header extends React.Component {

    toggleMenu() {
      $('#menu-btn').toggleClass('hover');
      $('.wrapper').toggleClass('show-global-menu');
    }

    backLink(){
      if(this.props.location.pathname === '/couponDetail'){
        this.props.dispatch(setIsSelectedCoupon(false));
      }
      this.props.history.goBack();
    }

    resetLink(url){
      this.props.dispatch(replace(url));
    }

   editHeader(){
      console.log(this.props.common.isSelectedCoupon);
      if(this.props.common.headerType === 1){
        return(
            <div className="inner">
                <div className="leftNavi">
                  <div id="menu-btn" className="menu-icon" onClick={this.toggleMenu.bind(this)}>
                    <div className="menu-bar menu-bar1"></div>
                    <div className="menu-bar menu-bar2"></div>
                    <div className="menu-bar menu-bar3"></div>
                  </div>
                </div>
                <div className="logo">
                    <h1>{this.props.common.title}</h1>
                </div>
            </div>
        );
      } else {
        return(
            <div className="inner">
                <div class="leftNavi">
                    <span class="backLink" onClick={this.backLink.bind(this)}></span>
                </div>
                <div className="logo">
                    <h1>{this.props.common.title}</h1>
                </div>
            </div>
        );
      }
   }

   render() {
    return (
      <div>
        <div id="header" className="header outer">
            {this.editHeader()}
        </div>
        <div className="global-menu-wrap">
          <div className="global-menu-inner">
            <ul className="global-menu-link">
              <li>
                <Link to='/couponList' onClick={this.toggleMenu.bind(this)}>マイクーポン</Link>
              </li>
              <li>
                <Link to="/charge" onClick={this.toggleMenu.bind(this)}>チャージ</Link>
              </li>
              <li>
                <Link to="/profile" onClick={this.toggleMenu.bind(this)}>プロフィール変更</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
   }
 }

  export default withRouter(Header);