/**
 * 注册组件
 * @author  Jiang
 */
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { registerUser, clearUser } from './../../actions/RegisterAction';
import ReactDOM from 'react-dom';
import { Form, Input, Row, Col, Button, message } from 'antd';
import * as styles from './Register.css';
const FormItem = Form.Item;

class Register extends React.Component {
  state = {
    confirmDirty: false,
    passwordTips: false,
  };
  componentWillReceiveProps(nextProps) {
    const { registerRedu } = nextProps;
    const { dispatch } = this.props;
    if(registerRedu.RegisterRedu.data) {
      if(registerRedu.RegisterRedu.data.code) {
        message.warning(registerRedu.RegisterRedu.data.message);
        clearUser(dispatch);
      } else {
        if(registerRedu.RegisterRedu.data.protocol41) {
          message.success('注册成功，页面将会自动跳转！');
          setTimeout(() => {

          },700);
          clearUser(dispatch);
        }
      }
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { dispatch } = this.props;
        registerUser(dispatch, values);
      }
    });
  }
  /**
   * [密码保存]
   * @author  Jiang
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  /**
   * [确认密码]
   * @author  Jiang
   * @param  {[type]}   rule     [description]
   * @param  {[type]}   value    [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两个密码输入不一致！');
    } else {
      callback();
    }
  }
  /**
   * [正则验证密码]
   * @author  Jiang
   * @param  {[type]}   rule     [description]
   * @param  {[type]}   value    [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    const passWordPattern = /^.*(?=.{6,20})(?=.*\d)(?=.*[a-z]).*$/;
    if(!passWordPattern.test(value)) {
      this.setState({
        passwordTips: true,
      });
    } else {
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      this.setState({
        passwordTips: false,
      });
    }
    callback();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!', whitespace: true }],
          })(
            <Input placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <div>
              <Input type="password" placeholder="请输入密码" />
              {
                this.state.passwordTips ? <div className="password-div">密码应为6-20位，由大小写字母及数字组成</div> : ''
              }
            </div>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" placeholder="请确认密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(Register);
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(WrappedRegistrationForm);