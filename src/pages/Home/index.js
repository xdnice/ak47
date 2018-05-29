import React,{ Component } from 'react';
import { getData } from './../../actions/HomeAction';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Menu, Icon, List, Spin, Affix, Row, Col, Layout } from 'antd';
import ItemCard from './../../components/ItemCard/ItemCard.js';
import PropTypes from 'prop-types';
import './index.css';
const { Header, Footer, Sider, Content } = Layout;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hasMore: true,
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    getData(dispatch,24);
  }
  handleInfiniteOnLoad = (page) => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      const { dispatch } = this.props;
      const { count } = this.props.homeRedu;
      getData(dispatch,count + 24);
    },500);
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    },700);
  };
  renderList(listData) {
    const listArray = listData.map((list,index) => {
      return (
        <ItemCard list={list} key={"card" + index} index={index} />
      );
    });
    return listArray;
  }
  /**
   * [clickLogo logo点击]
   * @author  Jiang
   * @return {[type]} [description]
   */
  clickLogo() {
    location.reload();
  }
  /**
   * [clickIcon 用户点击]
   * @author  Jiang
   * @return {[type]} [description]
   */
  clickUser() {
    this.props.history.push('/user');
  }
  render() {
    const { loading, data } = this.state;
    const { listData, count } = this.props.homeRedu;
    return (
      <div>
        <Affix>
          <Header style={{background: '#fff',borderBottom: '1px solid #e1e1e1'}}>
            <Row className="row">
              <Col span={12}>
                <div className="logo" onClick={this.clickLogo.bind(this)} />
              </Col>
              <Col span={12}>
                <div className="user">
                  <Icon type="user" className="icon" onClick={this.clickUser.bind(this)}/>
                </div>
              </Col>
            </Row>
          </Header>
        </Affix>
        <Content>
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={true}
            threshold={10}
          >
          <div className="cardDiv">
            {this.renderList(listData)}
          </div>
          {this.state.loading && <Spin style={{marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>}
          </InfiniteScroll>
        </Content>
      </div>
    );
  }
}
Index.propTypes = {
  clickUser: PropTypes.string
};
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);