import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Restaurants from './restaurants';

export default (history) => combineReducers({
  router: connectRouter(history),
  Restaurants : Restaurants
});
