import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TopMovies from "./components/topMovies";
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/topmovies" element={<TopMovies />}/>
        <Route path="/update" element={<Update />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
