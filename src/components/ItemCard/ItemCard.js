import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Avatar, Card, Col } from 'antd';
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
    return (
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        <Card
          style={{width:270}}
          key={"card" + index}
          cover={<img alt="src" src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
          actions={[<IconText type="star" text={list.star} />, <IconText type="like" text={list.like} />]}
        >
          <Meta
            avatar={<Avatar src={list.avatar} />}
            title={list.title}
            description={list.description}
          />
        </Card>
      </Col>
    );
  }
}
function mapStateToProps(state,oWnprops) {
  return state;
}
export default connect(mapStateToProps)(ItemCard);
