/**
 * 修改密码组件
 * @author  Jiang
 */
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Form, Input, Button, message } from 'antd';
import * as styles from './UserForgetPassword.css';
import { updatePassword, clear } from './../../actions/UserAction';
const FormItem = Form.Item;

class UserForgetPassword extends React.Component {
  state = {
    confirmDirty: false,
  };
  componentWillReceiveProps(nextProps) {
    const { userRedu } = nextProps;
    const { dispatch } = this.props;
    if(userRedu.data.code != undefined) {
      if(userRedu.data.code === 400) {
        message.error(userRedu.data.message, 1);
      } else {
        message.success('密码修改成功', 1);
      }
      clear(dispatch);
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { dispatch } = this.props;
        updatePassword(dispatch, values);
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
    const passWordPattern = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;
    if(value) {
      if(!passWordPattern.test(value)) {
        callback('密码应为6-20位，由大小写字母及数字组成');
      } else {
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      }
    } else {
      callback();
    }
  };
  render() {
    const { getFieldDecorator } = this.props.form;
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
              required: true, message: '请输入新密码!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <div>
              <Input type="password" placeholder="请输入新密码" />
            </div>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认新密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" placeholder="请确认新密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">修改</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(UserForgetPassword);
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(WrappedRegistrationForm);