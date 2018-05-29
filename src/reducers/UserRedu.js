import { combineReducers } from 'redux';
import { initialState } from './../store/UserStore';
import "babel-polyfill";

const userRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'REGISTERREDU':
      return Object.assign({}, state, action);
    break;
    case 'CLEARREDU': 
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}
/*const reducers = combineReducers({
  userRedu
});
export default reducers;*/
export default userRedu;