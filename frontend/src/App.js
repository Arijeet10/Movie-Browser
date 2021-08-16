import React, { Fragment, useEffect, useState } from "react";
import List from "./components/list";
import Detail from "./components/details";
import Nav from "./components/navigation";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";

function App() {

  const [state, setState] = useState([])
  const [movieDetail, setMovieDetail] = useState({})

  const movieList = async () => {
    const list = await axios.get("http://localhost:5000/list")
    setState(list)
  }

  useEffect(function () {
    movieList()
  }, [setState])


  function showDetails(uniqueId) {
    axios.post(`http://localhost:5000/detail/${uniqueId}`)
      .then(res => { setMovieDetail(res.data) })
      .catch(err => { console.log(err) })
  }


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Fragment>
              <Nav />
              <div style={{ marginTop: 20 }}>
                <Grid container spacing={2}>
                  {state.data && state.data.map(
                    (comming, index) =>
                      <Grid item key={index} xs={9} md={3} lg={2}>
                        <Paper>
                          <List uniqueId={comming.id} showDetails={showDetails} title={comming.original_title} desc={comming.overview} rating={comming.vote_average} image={comming.poster_path} />
                        </Paper>
                      </Grid>
                  )}
                </Grid>
              </div>
            </Fragment>
          </Route>
          <Route path="/detail">
            <Nav />
            <div style={{ marginTop: 20 }}>
              <Detail poster={movieDetail.moviePoster} title={movieDetail.movieName} rating={movieDetail.movieRating} date={movieDetail.releaseDate} length={movieDetail.movieLength} desc={movieDetail.movieDesc} cast={movieDetail.movieCast} director={movieDetail.movieDirector} />
            </div>
          </Route>
          <Route component={Error}></Route>
        </Switch>
      </Router>
      {/* <Nav />
      {console.log(movieDetail)}
      {state.data && state.data.map(
        (comming, index) => {
          return (<List key={index} uniqueId={comming.id} showDetails={showDetails} title={comming.original_title} desc={comming.overview} rating={comming.vote_average} image={comming.poster_path} />)
        })}
      <Detail title={movieDetail.movieName} rating={movieDetail.movieRating} date={movieDetail.releaseDate} length={movieDetail.movieLength} desc={movieDetail.movieDesc} cast={movieDetail.movieCast} director={movieDetail.movieDirector} /> */}

    </div>
  );
}

export default App;
