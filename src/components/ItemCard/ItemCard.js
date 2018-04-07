import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Avatar, Card } from 'antd';
import 'antd/dist/antd.css';
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
        <Card
          style={{ width: 600, marginTop: 48 }}
          key={"card" + index}
          cover={<img alt="src" src={require('./../../images/1.jpg')} />}
          actions={[<IconText type="star" text={list.star} />, <IconText type="like" text={list.like} />, <IconText type="message" text={list.message} />]}
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
