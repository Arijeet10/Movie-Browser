import React, { useState } from "react";
import axios from "axios";

function Nav(){

    const imgUrl = "http://image.tmdb.org/t/p/original"

    const [state,setState]=useState("")
    const [searchData,setSearchData]=useState()

    function handleChange(event){
        const inputVal=event.target.value
        setState(inputVal)
    }

    // function searchMovie(){
    //     axios.post(`http://localhost:5000/search/${state}`)
    //      .then(res=>{setSearchData(res.data)})
    //      .catch(err=>{console.log(err)})
    // }

    function handleClick(event){
        event.preventDefault()
        axios.post(`http://localhost:5000/search/${state}`)
        .then(res=>{setSearchData(res.data)})
        .catch(err=>{console.log(err)})
    }

    return(
        <div>
            <form>
            <input type="text" name="movie" value={state} placeholder="Search" onChange={handleChange} />
            <button type="submit" onClick={handleClick}>Go</button>
            </form>
            <button type="submit">Home</button>
            {searchData&&searchData.map((search,index)=>{
                return(
                    <p>
                        <img src={imgUrl + search.backdrop_path} alt="Movie" /><br />
                        {search.original_title}<br />
                        {search.vote_average}<br />
                        {search.overview}<br/>
                    </p>
                )
            })}
        </div>
    )
}

export default Nav;