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
    if(index % 2 == 0) {
      image = 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
    } else {
      image = 'https://scontent-hkg3-2.cdninstagram.com/vp/aaa8549b167a92398d44a82b693920e3/5B560C10/t51.2885-15/e35/29738167_210452009715163_8841223009546010624_n.jpg';
    }
    return (
      <Card
        className="card"
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
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(ItemCard);
