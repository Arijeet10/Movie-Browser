import React,{useEffect} from 'react';
import {connect} from "react-redux";
import Loading from "./loading";
import MovieListUpcom from "./movieListUpcom";
import {fetchUpcomming} from "../actions/searchActions";
import { Grid, Paper } from '@material-ui/core';

function MovieList(props) {
    const {movies}=props

    useEffect(()=>{
        fetchUpcomming();
        // eslint-disable-next-line
    },[])

    return (
        <div>
            {movies.length>0?movies.map((movie,index)=>{
                return(
                    <div style={{ marginTop: 20 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={9} md={3} lg={2}>
                        <Paper>
                        <MovieListUpcom key={index} movie={movie} />
                        </Paper>
                      </Grid>
                    </Grid>
                  </div>
                )
                })
                :<Loading />}
        </div>
    )
}


const mapStateToProps=state=>({
    movies:state.movies.movies
})

export default connect(mapStateToProps,fetchUpcomming)(MovieList)
