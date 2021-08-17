import { Grid, Paper } from '@material-ui/core';
import React,{ useEffect,useState } from 'react';
import { connect } from "react-redux";
import MovieCard from "./movieCard";
import MovieList from './movieList';
import { UPCOM_MOVIES } from '../actions/types';
import axios from 'axios';


function MovieContainer(props) {
    const { movies } = props


    const [pageNo,setPageNo]=useState(1);

    // function getTotalPage() {
    //     axios.get(`http://localhost:5000/list/`)
    //       .then(res => {const totalPage = res.data})
    //       .catch(err => { console.log(err) })
    //   }
    
      const getData=text=>dispatch=>{
        axios.get(`http://localhost:5000/list/${pageNo}`)
            .then(res=>{dispatch({
                type:UPCOM_MOVIES,
                payload:res.data,
            })})
            .catch(err=>{console.log(err)})
    }
    
      function handleClick(){
        const no=pageNo+1;
        setPageNo(no);
      }
    
      useEffect(() => {
        getData();
        // eslint-disable-next-line
      }, [setPageNo])




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
                <button type="submit" onClick={handleClick}>Next</button>
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})


export default connect(mapStateToProps)(MovieContainer);
