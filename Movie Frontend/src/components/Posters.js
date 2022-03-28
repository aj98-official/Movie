import React from "react";

export default function Posters(props) {
  const picUrl = props.item.image;
  const title = props.item.title;
  const plot = props.item.plot;  
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
