import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import * as styles from './index.css';
const FormItem = Form.Item;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  goRegister = () => {
    this.props.history.push('/register');
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-div">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
            <a className="login-form-forgot" href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button><a onClick={this.goRegister}>去注册!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(Index);
function mapStateToProps(state,oWnprops) {
  return state;
}

// ReactDOM.render(Index, document.getElementById('root'));
export default connect(mapStateToProps)(withRouter(WrappedNormalLoginForm));