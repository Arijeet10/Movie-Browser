import {LOADING, FETCH_DETAILS, FETCH_MOVIES, SEARCH_MOVIE, UPCOM_MOVIES} from "./types";
import axios from "axios";

//redux action to search movie
export const searchMovie=text=>dispatch=>{
    dispatch({
        type:SEARCH_MOVIE,
        payload:text
    })
};

//redux action to get search movie list
export const fetchMovies=text=>dispatch=>{
    axios.post(`http://localhost:5000/search/${text}`)
    .then(res => {dispatch({
        type:FETCH_MOVIES,
        payload:res.data
    })})
    .catch(err => { console.log(err) })
}

//redux action to get details of particular movie
export const fetchDetails=id=>dispatch=>{
    axios.post(`http://localhost:5000/detail/${id}`)
    .then(res=>{dispatch({
        type:FETCH_DETAILS,
        payload:res.data
    })})
    .catch(err => { console.log(err) })
}

//redux action to get all movie list which are upcomming
export const fetchUpcomming=(data)=>{
    return {
        type:UPCOM_MOVIES,
        payload:data
    };
};

//redux action to set the loading when data is being fetched from api
export const setLoading=()=>{
    return {
        type:LOADING
    }
}
