import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { connect } from "react-redux";
import MovieCard from "./movieCard";
import MovieList from './movieList';



function MovieContainer(props) {
    const { movies } = props
    return (
        <div>
            {movies.length > 0 ?
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
                :<MovieList /> }
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})


export default connect(mapStateToProps)(MovieContainer)
