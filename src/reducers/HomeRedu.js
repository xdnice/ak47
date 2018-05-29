import { combineReducers } from 'redux';
import { initialState } from './../store/HomeStore';
import "babel-polyfill";

const homeRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'GETDATA':
      return Object.assign({},state,action);
    break;
    default:
      return state;
  }
}
/*const reducers = combineReducers({
  homeRedu
});
export default reducers;*/
export default homeRedu;