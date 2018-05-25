import { combineReducers } from 'redux';
import { initialState } from './../store/RegisterStore';
import "babel-polyfill";

const RegisterRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'REGISTERUSERRU':
      return Object.assign({},state,action);
    break;
    case 'CLEARUSER': 
      return Object.assign({}, {});
    default:
      return state;
  }
}
const reducers = combineReducers({
  RegisterRedu
});
export default reducers;