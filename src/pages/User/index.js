import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as styles from './index.css';
import userLogin from './../../components/User/UserLogin.js';
import userRegister from './../../components/User/UserRegister.js';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  goRegister = () => {
    const { isLogin } = this.state;
    if(isLogin) {
      this.setState({
        isLogin: false,
      });
    } else {
      this.setState({
        isLogin: true,
      });
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { isLogin } = this.state;
    return (
      <div className="content">
        <div className="user-div">
          <h2 className="name">视线</h2>
          { isLogin ? <userLogin /> : <userRegister /> }
          <div className="footerButton">{ isLogin ? '没有账号' : '已有账号' }？<a onClick={this.goRegister}>{ isLogin ? '注册' : '登录' }</a>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}

export default connect(mapStateToProps)(Index);