import React from 'react'
import {connect} from "react-redux";
import Loading from "./loading";
import MovieContainer from './movieContainer';
import NavBar from "./searchbar";
import MovieList from './movieList';


function HomePage(props) {

    const {loading}=props;

    return (
        <div>
            <NavBar />
            {loading?<Loading />:<MovieContainer />}
            <MovieList />
        </div>
    )
}


const mapStateToProps=state=>({
    loading:state.movies.loading
})


export default connect(mapStateToProps)(HomePage);
