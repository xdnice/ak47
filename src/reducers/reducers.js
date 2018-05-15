import { combineReducers } from 'redux';
import { initialState } from './../store/store';
import "babel-polyfill";

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