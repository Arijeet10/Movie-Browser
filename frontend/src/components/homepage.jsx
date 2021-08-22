import React from 'react'
import {connect} from "react-redux";
import Loading from "./loading";
import MovieContainer from './movieContainer';
import NavBar from "./searchbar";


function HomePage(props) {

    const {loading}=props;  //destructuring the loading state to check if data is loaded or not

    return (
        <div>
            {/* navigation */}
            <NavBar />
            {/* condition if data is fetched the show the data component else show loading component */}
            {loading?<Loading />:<MovieContainer />}
        </div>
    )
}

//pass loading state as a prop to the components
const mapStateToProps=state=>({
    loading:state.movies.loading
})


export default connect(mapStateToProps)(HomePage);
