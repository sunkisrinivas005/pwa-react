import React, {useState} from "react";
import MovieCardUI from "./MovieCardUI";
import MovieDetailView from "./MovieDetailUI"

const MovieListUI = ({ data }) => {
    const [open, setOpen] = React.useState(false);
    const [view, setView] = useState({})
    const handleClose = () => {
        setOpen(false);
    };
    const handleDetailClick =(i) => {
        setView(i)
        setOpen(true)
    }

  return (
    <div className="col-lg-12 row">
      {data &&
        data.map((i, n) => {
          return <MovieCardUI data={i} key={n}handleDetailClick ={handleDetailClick}  />;
        })}
        <MovieDetailView open ={open} handleClose ={handleClose} data = {view}/>
    </div>
  );
};

export default MovieListUI;
