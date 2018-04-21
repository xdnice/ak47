import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { getData } from './../../actions/Route';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Menu, Icon, List, Spin, Affix, Row, Col, Layout } from 'antd';
import ItemCard from './../../components/ItemCard/ItemCard.js';
import './index.css';
const { Header, Footer, Sider, Content } = Layout;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const user = [
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Thomas',
  }
]

const recommendedUsers = [
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Thomas',
  },
  {
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    name: 'Thomas2',
  },
  {
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    name: 'Thomas3',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Thomas4',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Thomas5',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Thomas6',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Thomas7',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Thomas8',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Thomas9',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Thomas10',
  }
]
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
      const { count } = this.props.reducers.layout;
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
    this.props.history.push('/');
  }
  /**
   * [clickIcon 用户点击]
   * @author  Jiang
   * @return {[type]} [description]
   */
  clickUser() {
    console.log(this.props);
    this.props.history.push('./../user');
  }
  render() {
    const { loading, data } = this.state;
    const { listData, count } = this.props.reducers.layout;
    return (
      <div>
        <Affix>
          <Header className="navigation">
            <Row className="row">
              <Col span={12}>
                <div className="logo" onClick={this.clickLogo.bind(this)}></div>
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
          {this.state.loading && <Spin className="loading" />}
          </InfiniteScroll>
        </Content>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);