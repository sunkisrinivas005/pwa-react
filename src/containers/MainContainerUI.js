import React from "react";
import MovieListUI from "./MovieListUI";

const MainContainer = () => {
    return(
        <div style = {{backgroundColor :"#D3D3D3"}}>
            <div className = "col-lg-12 row" style = {{justifyContent:"space-between", padding:"10px"}}>
                <div className = "col-lg-12">
                <h3 
                style = {{padding:"10px",textAlign:"center", justifyContent:"center", alignSelf:"center"}}
                >Restaurants</h3>
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