import React from "react";
import {useSelector} from "react-redux";
import {Route, Switch, Redirect } from "react-router-dom";
import MainContainerUI from "./MainContainerUI";

const App = ({match}) => {
    let {movieList} = useSelector(({MovieList}) => MovieList)
    console.log(movieList, "MovieList")
    return(
        <div className="app-main">
        <Switch>
        <Redirect exact from={`${match.url}`} to={`/home`} />
        <Route path="/home" component={MainContainerUI} />
        {/* <Route  path="/movie" component={Back} /> */}
      </Switch>
      </div>
    )
}


export default App