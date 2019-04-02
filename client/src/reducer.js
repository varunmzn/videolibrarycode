
import listVideo from './reducers/listVideo';
import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

export default combineReducers({
  listVideo,
  router: routerReducer
});
