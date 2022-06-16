import React, {useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {css} from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import './App.css';

function App() {
  
  const[loading, setLoading] = useState(false);
  const override = css`
  display: block;
  border-color: Red;
  margin-top: 20%; 
  `;

  useEffect(() =>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [])
  
  return (
    <div className="App">
            
        <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40}/>
        <>
          <Navbar/>
          <Header/>
          <Product/>
          <About/>
          <Contact/>
        </>
      
    </div>
  );
}

export default App;
