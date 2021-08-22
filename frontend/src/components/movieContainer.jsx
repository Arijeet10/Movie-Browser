import { Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from "react-redux";
import MovieCard from "./movieCard";
import axios from 'axios';
import { fetchUpcomming } from '../actions/searchActions';


function MovieContainer(props) {
    const { movies,search } = props

    const [pageNo, setPageNo] = useState(1);

    const dispatch=useDispatch()
    
    const getData = async () => {
        const response = await axios
            .get(`http://localhost:5000/list/${pageNo}`)
            .catch(err => console.log(err));
        dispatch((fetchUpcomming(response.data)));   //dispatch data in the reducer
    };

    function handleClick() {
        setPageNo(pageNo + 1)
        console.log(pageNo)
        getData();
    }

    useEffect(() => {
        if(search===false){
            getData();
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {
                movies.length>0 ?
                    <div style={{ marginTop: 20 }}>
                        <Grid container spacing={2}>
                            {movies.map(
                                (movie, index) =>
                                    <Grid item key={index} xs={9} md={3} lg={2}>
                                        <Paper>
                                            <MovieCard key={index} movie={movie} />
                                        </Paper>
                                    </Grid>
                            )}
                        </Grid>
                    </div>
                    : null
            }
            <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100px",
                  border: "none", 
            }}>
                <button style={{
                    color: "white",
                    background: "#2196f3",
                    outline: "none",
                    border: "none",
                    padding: "5px 15px",
                    fontSize: "1.3em",
                    fontWeight: "400",
                }} type="submit" onClick={handleClick}>Next</button>

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    search:state.movies.search
})


export default connect(mapStateToProps)(MovieContainer);
