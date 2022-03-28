import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TopSearch from "./SearchTopMovies";



export default function TopMovies(){
    
    return (
        <div>
           <NavBar />
           <TopSearch />
           <Footer />
        </div>
    )
}