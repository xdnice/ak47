import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import * as styles from './index.css';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>123</div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index)