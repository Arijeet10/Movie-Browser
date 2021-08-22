import React from 'react';
import { connect } from "react-redux";
import Loading from "./loading";
import MovieListUpcom from "./movieListUpcom";
import { fetchUpcomming } from "../actions/searchActions";
import { Grid, Paper } from '@material-ui/core';
// import { UPCOM_MOVIES } from '../actions/types';
// import axios from 'axios';

function MovieList(props) {

  // const [pageNo,setPageNo]=useState(1);


  const { movies } = props

  // const [totalPage,setTotalPage]=useState();

  // function getTotalPage() {
  //     axios.get(`http://localhost:5000/list/`)
  //       .then(res => {setTotalPage(res.data)})
  //       .catch(err => { console.log(err) })
  //   }
  
  //   let pageNo=1;
  //   const getData=text=>dispatch=>{
  //     axios.get(`http://localhost:5000/list/${pageNo}`)
  //         .then(res=>{dispatch({
  //             type:UPCOM_MOVIES,
  //             payload:res.data,
  //         })})
  //         .catch(err=>{console.log(err)})
  // }
  
  //   function handleClick(){
  //       console.log(totalPage)
  //   }
  
  //   useEffect(() => {
  //       getTotalPage();
  //       getData();
  //     // eslint-disable-next-line
  //   }, [])

  return (
    <React.Fragment>
      {movies.length > 0 ? movies.map((movie, index) => {
        return (
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
        : <Loading />}
        
        
    </React.Fragment>
  )
}


const mapStateToProps = state => ({
  movies: state.movies.movies
})

export default connect(mapStateToProps, fetchUpcomming)(MovieList)
