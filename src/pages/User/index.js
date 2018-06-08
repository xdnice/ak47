import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        123
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);