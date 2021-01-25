import React from "react";
import MovieListUI from "./MovieListUI";
// const data = require('../movies.json');
import {Button} from "@material-ui/core";
// import {useSelector, useDispatch} from "react-redux"
// import axios from "axios";
import  {getAllRestaurants} from '../actions/restaurants';

const MainContainer = () => {
    let [Open, setOpen] = React.useState(false);

    return(
        <div style = {{backgroundColor :"#D3D3D3"}}>
            <div className = "col-lg-12 row" style = {{justifyContent:"space-between", padding:"10px"}}>
                {/* <div style = {{justifyContent:"center"}}> */}
                <div className = "col-lg-9">
                <h3 
                style = {{padding:"10px",textAlign:"center", justifyContent:"center", alignSelf:"center"}}
                >Restaurants</h3>
                </div>
                
                {/* </div> */}
                <div className = "col-lg-3" style = {{padding:"10px"}}> 
            
                </div>
            </div>

            <MovieListUI 
            open = {Open}
            handleOpen = {setOpen}
            handleClose = {() => setOpen(false)}
             />
        </div>
    )
}


export default MainContainer;