import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import MovieList from "./movieList";

export default (history) => combineReducers({
  router: connectRouter(history),
  MovieList : MovieList
});
