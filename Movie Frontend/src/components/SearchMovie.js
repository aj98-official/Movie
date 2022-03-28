import React, { useState } from "react";
import Poster from "./Poster";
import axios from "axios";

export default function SearchBar() {
  const [searchItem, setSearchItem] = useState("");
  const [foundItem, setFoundItem] = useState({});
  const [isHidden, setIsHidden] = useState(true);
  const apiKey = "3d6a475";

  const handleInput = (e) => {
    e.preventDefault();
    const url = "http://www.omdbapi.com/?t=" + searchItem + "&apikey=" + apiKey;

    const postData = async (f) => {
      try {
        const res = await axios.post("http://localhost:3000/users/", f);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchdata = async () => {
      try {
        const res = await axios.get(url);
        if (res.data.Response === "True") {
          setFoundItem(res.data);
          setIsHidden(false);
          postData(res.data);
        } else alert("Movie Not Found");
      } catch (e) {
        console.log("error is: ", e);
      }
    };

    fetchdata();
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3 mt-5 d-flex flex-row">
          <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="form-control col mx-3"
            placeholder="Type here"
          />
          <button
            type="submit"
            className="btn btn-primary col-2 mx-3"
            onClick={handleInput}
          >
            Search
          </button>
        </div>
      </form>
      <div>
        {!isHidden && (
          <div className="mt-5 mx-auto mb-5">
            <Poster item={foundItem} />
          </div>
        )}
      </div>
    </div>
  );
}
