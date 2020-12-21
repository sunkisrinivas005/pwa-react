import React from "react";
import MovieListUI from "./MovieListUI";
const data = require('../movies.json');


const MainContainer = () => {
    return(
        <div style = {{backgroundColor :"#D3D3D3"}}>
        <h2 style = {{textAlign:"center", padding:"20px"}}>Movie List</h2>
        <h5 style = {{float:"right", padding:"20px"}}> Titles : {data && data.length ? data.length : "None"}</h5>
        <div className = "col-lg-12 row">
           <MovieListUI data = {data}/>
        </div>
        </div>
    )
}


export default MainContainer;