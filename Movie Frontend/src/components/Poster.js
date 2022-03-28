import React from "react";

export default function Poster(props) {
  const picUrl = props.item.Poster;
  const title = props.item.Title;
  const plot = props.item.Plot;  
  return (
    <div>
      <div className="card mx-auto">
        <img src= {picUrl} className="card-img-top" alt="movie-poster-img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{plot} </p>
        </div>
      </div>
    </div>
  );
}
