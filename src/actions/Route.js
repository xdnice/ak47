const GETDATA = 'GETDATA';
const getData = (dispatch,count) => {
  let listData = [];
  console.log(count);
  for (let i = 0; i < count; i++) {
    listData.push({
      src: 'https://scontent-hkg3-2.cdninstagram.com/vp/aaa8549b167a92398d44a82b693920e3/5B560C10/t51.2885-15/e35/29738167_210452009715163_8841223009546010624_n.jpg',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: `Title Jiang ${i}`,
      description:'Rise n’ shine and don’t forget to smile',
      star: i * 2,
      like: i * 3,
      message: i * 4,
    });
  }
  dispatch({
    count,
    listData,
    type:GETDATA,
  });
}
export { getData }