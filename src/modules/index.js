import {combineReducers} from 'redux'
import count from './count'
import font from './font'
import route from './route';

const rootReducer=combineReducers({
  count,
  font,
  route
}); 
export default rootReducer