import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {Route, Switch, Redirect } from "react-router-dom";
import MainContainerUI from "./MainContainerUI";


const App = ({match}) => {
    return(
        <div className="app-main">
        <Switch>
        <Redirect exact from={`${match.url}`} to={`/home`} />
        <Route path="/home" component={MainContainerUI} />
      </Switch>
      </div>
    )
}


export default App