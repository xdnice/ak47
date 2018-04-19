import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { getData } from './../../actions/Route';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Menu, Icon, List, Spin, Affix } from 'antd';
import ItemCard from './../../components/ItemCard/ItemCard.js';
import ItemAvatar from './../../components/ItemAvatar/ItemAvatar.js';
import * as styles from './index.css';

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
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Thomas2',
  },
  {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
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
    getData(dispatch,10);
  }
  handleInfiniteOnLoad = (page) => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      const { dispatch } = this.props;
      const { count } = this.props.reducers.layout;
      getData(dispatch,count + 10);
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
        <ItemCard list={list} key={"card" + index} />
      );
    });
    return listArray;
  }
  render() {
    const { loading, data } = this.state;
    const { listData, count } = this.props.reducers.layout;
    return (
      <div className="content">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={true}
          threshold={10}
          className="infiniteScroll"
        >
          {this.renderList(listData)}
          {this.state.loading && <Spin className="loading" />}
          <div className="right">
            {
              user.map((list,index) => {
                return (
                  <ItemAvatar list={list} key={index} />
                );
              })
            }
            <div className="fastBeat">快拍</div>
            <div className="recommendedUsers">
              {
                recommendedUsers.map((list,index) => {
                  return (
                    <ItemAvatar list={list} key={index} />
                  );
                })
              }
            </div>
            <div className="copyRight">
              © 2018 ShareImage
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(Index);