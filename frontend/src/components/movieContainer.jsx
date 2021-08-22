import { Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import MovieCard from "./movieCard";
import MovieList from './movieList';
import { UPCOM_MOVIES } from '../actions/types';
import axios from 'axios';


function MovieContainer(props) {
    const { movies } = props

    const [pageNo, setPageNo] = useState(1);
    const [totalPage, setTotalPage] = useState();

    function getTotalPage() {
        axios.get(`http://localhost:5000/list/`)
            .then(res => { setTotalPage(res.data) })
            .catch(err => { console.log(err) })
    }

    const getData = text => dispatch => {
        axios.get(`http://localhost:5000/list/${pageNo}`)
            .then(res => {
                dispatch({
                    type: UPCOM_MOVIES,
                    payload: res.data,
                })
            })
            .catch(err => { console.log(err) })
    }

    function handleClick() {
        setPageNo(pageNo + 1)
        getData();
    }

    useEffect(() => {
        getTotalPage();
        getData();
        // eslint-disable-next-line
    }, [pageNo])




    return (
        <div>

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
                    : <MovieList />
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
})


export default connect(mapStateToProps)(MovieContainer);
