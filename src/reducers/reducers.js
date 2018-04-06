import { combineReducers } from 'redux';
import "babel-polyfill";
const initialState = {
  listData:[],
}
const layout = (state = initialState, action) => {
  switch(action.type) {
    case 'GETDATA':
      return Object.assign({},state,action);
    break;
    default:
      return state;
  }
}
const reducers = combineReducers({
  layout
});
export default reducers;