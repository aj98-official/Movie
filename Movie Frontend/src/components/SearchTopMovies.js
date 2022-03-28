import React, { useState } from "react";
import Posters from "./Posters";
import axios from "axios";

export default function TopSearch() {
  const yr = [];
  for (let i = 1900; i <= 2030; i++) {
    yr.push(i);
  }

  const [items, setItems] = useState([]);
  const [ch, setCh] = useState("imdb");
  const [yrr, setYrr] = useState("2021");

  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/users/" + yrr + "/" + ch
      );
      setItems(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleYear = (e) => {
    e.preventDefault();
    const ind = parseInt(e.target.id);
    const year = String(yr[ind]);
    setYrr(year);
  };

  const handleSource = (e) => {
    e.preventDefault();
    setCh(e.target.id);
    getData();
  };

  return (
    <div>
      <div className="container row mt-5 mx-auto w-25">
        <div className="dropdown col d-flex align-items-center flex-column">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Year
          </button>
          <ul
            className="dropdown-menu yrdrop"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              {yr.map((item, index) => {
                return (
                  <a
                    className="dropdown-item"
                    id={String(index)}
                    onClick={handleYear}
                  >
                    {item}
                  </a>
                );
              })}
            </li>
          </ul>
        </div>
        <div className="dropdown col d-flex align-items-center flex-column">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Source
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" id="imdb" onClick={handleSource}>
                IMDB
              </a>
              <a
                className="dropdown-item"
                id="metacritic"
                onClick={handleSource}
              >
                MetaCritic
              </a>
              <a
                className="dropdown-item"
                id="rottentomatoes"
                onClick={handleSource}
              >
                Rotten Tomatoes
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        {items.map((item, index) => {
          return (
            <div className="row col-lg-4 col-md-6">
              <Posters key = {index} item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
