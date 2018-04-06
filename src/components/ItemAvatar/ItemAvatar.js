import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import * as styles from './ItemAvatar.css';
class ItemAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const { list } = this.props;
    return (
      <div className="avatar">
        <Avatar size="large" src={list.src}></Avatar>
        <span className="name">{list.name}</span>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(ItemAvatar);
