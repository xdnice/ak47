import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Avatar, Card, Col } from 'antd';
import './ItemCard.css';
const { Meta } = Card;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const { index, list } = this.props;
    let image;
    image = 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
    return (
      <div className="card">
        <Card
          key={"card" + index}
          hoverable
          cover={<img alt="src" src={image} className="image" />}
          actions={[<IconText type="star" text={list.star} />, <IconText type="like" text={list.like} />]}
        >
          <Meta
            avatar={<Avatar src={list.avatar} />}
            title={list.title}
            description={list.description}
          />
        </Card>
      </div>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(ItemCard);
