import { Grid, Paper, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from "react-redux";
import MovieCard from "./movieCard";
import axios from 'axios';
import { fetchUpcomming } from '../actions/searchActions';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Loading from './loading';


function MovieContainer(props) {
    const { movies, search } = props    //destructuring of the states

    const [pageNo, setPageNo] = useState(1);    //state to store the page number

    //for dispatching the data to reducer
    const dispatch = useDispatch()

    //fetch the data from api using axios
    const getData = async () => {
        const response = await axios
            .get(`http://localhost:5000/list/${pageNo}`)
            .catch(err => console.log(err));
        dispatch((fetchUpcomming(response.data)));   //dispatch data in the reducer
    };

    function handleClick() {
        setPageNo(pageNo + 1)   //increase the page count to load next page
        getData();  //fetch the next page data from api
    }

    // calls the function to fetch movie data one time when page renders
    useEffect(() => {
        if (search === false) {
            getData();
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {/* condition to check if the movies state has data from api then render the movie list */}
            {
                movies.length > 0 ?
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
                    : <Loading />
            }
            {/* button to load the next movie list page */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
                border: "none",
            }}>
                <IconButton style={{
                    color: "white",
                    background: "#2196f3",
                    outline: "none",
                    border: "none",
                    padding: "5px 15px",
                }}
                    type="submit" onClick={handleClick}
                >
                    <NavigateNextIcon size="large" />
                </IconButton>

            </div>
        </div>
    )
}

//pass the movie and search state as a prop to the component
const mapStateToProps = state => ({
    movies: state.movies.movies,
    search: state.movies.search
})


export default connect(mapStateToProps)(MovieContainer);
