import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import * as styles from './index.css';
import Login from './../../components/User/Login.js';
import Register from './../../components/User/Register.js';
const FormItem = Form.Item;
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  goRegister = () => {
    if(this.state.isLogin) {
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
    return (
      <div className="content">
        <div className="user-div">
          <h2 className="name">图魅</h2>
          { this.state.isLogin ? <Login /> : <Register /> }
          <div className="footerButton">{ this.state.isLogin ? '没有账号' : '已有账号' }？<a onClick={this.goRegister}>{ this.state.isLogin ? '注册' : '登录' }</a>
          </div>
        </div>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(Index);
function mapStateToProps(state,oWnprops) {
  return state;
}

export default connect(mapStateToProps)(withRouter(WrappedNormalLoginForm));