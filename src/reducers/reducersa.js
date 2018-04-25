import { combineReducers } from 'redux';
const initialState = {
  listData:[],
}
const layouta = (state = initialState, action) => {
  switch(action.type) {
    case 'GETDATA':
      return Object.assign({},state,action);
    case 'Test':
      return Object.assign({},state,action);
    default:
      return state;
  }
}
const reducers = combineReducers({
  layouta
});
export default reducers;