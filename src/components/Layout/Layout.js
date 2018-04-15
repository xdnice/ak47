import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Affix } from 'antd';
import * as styles from './Layout.css';
import Home from './../../pages/Home/index.js';
import About from './../../pages/About/index.js';
import User from './../../pages/User/index.js';
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'user',
    };
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    })
  };
  renderContent() {
    console.log(this.props);
    switch(this.state.current) {
      case 'home':
        return <Home />;
      break;
      case 'about':
        return <About />;
      case 'user':
        return <User />;
    }
  }
  render() {
    return (
      <div>
        <Affix>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            className="ant-layout-header"
          >
            <Menu.Item key="home">
              <Icon className="icon" type="home" />
            </Menu.Item>
            <Menu.Item key="about">
              <Icon className="icon" type="compass" />
            </Menu.Item>
            <Menu.Item key="user">
              <Icon className="icon" type="user" />
            </Menu.Item>
          </Menu>
        </Affix>
        {this.renderContent()}
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Layout)