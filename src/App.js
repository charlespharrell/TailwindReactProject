import React from "react";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Analytics from "./component/Analytics";
import NewsLetter from "./component/NewsLetter";
import Cards from "./component/Cards";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="App">
      <NavBar/>
     <Home/>
     <Analytics/>
     <NewsLetter/>
     <Cards/>
     <Footer/>
    </div>
  );
}

export default App;
