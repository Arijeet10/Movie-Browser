import React, { useEffect, useState } from "react";
import List from "./components/list";
import Detail from "./components/details";
import axios from "axios";

function App() {

  const [state,setState]=useState({})

  const movieList=async()=>{
    const list=await axios.get("http://localhost:5000/list")
    setState(list)
  }

  useEffect(()=>{
    movieList()
  },[state])

  return (
    <div className="App">
      <List />
      <Detail />
    </div>
  );
}

export default App;
