import {useState} from "react";
import axios from 'axios';

export default function UpdatePlot() {
  
  const [id, setId] = useState(""); 
  const [plot, setPlot] = useState("");

  const handleClick = (e) => {
    const ID = parseInt(id);
    const newPlot = {
        "plot" : plot
    }  
    const updateData = async (f) => {
        try {
          const res = await axios.post("http://localhost:3000/users/" + ID, f);
          console.log(res);
          alert("plot updated");
        } catch (e) {
          console.log(e);
        }
      };
      updateData(newPlot);
  }
    
  return (
    <div className="container mt-5">
      <div classNameName="mb-3">
        <label for="title" classNameName="form-label" >
          Movie ID
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Movie ID"
          onChange = {(e) => setId(e.target.value)}
        />
      </div>
      <div className="mb-3 mt-5">
        <label for="Textarea" className="form-label">
          New Plot
        </label>
        <textarea
          className="form-control"
          id="Textarea"
          rows="3"
          onChange={(e) => setPlot(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick = {handleClick}>Submit</button>
    </div>
  );
}
