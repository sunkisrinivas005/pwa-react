import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import MovieList from "./movieList";
import Restaurants from './restaurants';
export default (history) => combineReducers({
  router: connectRouter(history),
  MovieList : MovieList,
  Restaurants : Restaurants
});
