import React from "react";
import SearchBar from "./SearchMovie";
import NavBar from "./NavBar";
import Footer from "./Footer";




export default function Home(){
    
    return (
        <div>
           <NavBar />
           <SearchBar />
           <Footer />
        </div>
    )
}