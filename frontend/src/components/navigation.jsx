import React, { useState } from "react";
import axios from "axios";
import Search from "./search"
import { Grid, Paper } from "@material-ui/core";

function Nav() {

    const [state, setState] = useState("")
    const [searchData, setSearchData] = useState()

    function handleChange(event) {
        const inputVal = event.target.value
        setState(inputVal)
    }

    // function searchMovie(){
    //     axios.post(`http://localhost:5000/search/${state}`)
    //      .then(res=>{setSearchData(res.data)})
    //      .catch(err=>{console.log(err)})
    // }

    function handleClick(event) {
        event.preventDefault()
        axios.post(`http://localhost:5000/search/${state}`)
            .then(res => { setSearchData(res.data) })
            .catch(err => { console.log(err) })
    }

    return (
        <div>
            <form>
                <input type="text" name="movie" value={state} placeholder="Search" onChange={handleChange} />
                <button type="submit" onClick={handleClick}>Go</button>
            </form>
            <button type="submit">Home</button>
            {/* {searchData && searchData.map((search, index) => {
                return (
                    <Search key={index} title={search.original_title} desc={search.overview} rating={search.vote_average} image={search.poster_path} />
                )
            })
            } */}


            <Grid container spacing={2}>
                {searchData && searchData.map(
                    (search, index) =>
                        <Grid item key={index} xs={9} md={3} lg={2}>
                            <Paper>
                            <Search key={index} title={search.original_title} desc={search.overview} rating={search.vote_average} image={search.poster_path} />
                            </Paper>
                        </Grid>
                )}
            </Grid>

        </div>
    )
}

export default Nav;