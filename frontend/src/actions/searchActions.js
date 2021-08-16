import {LOADING, FETCH_DETAILS, FETCH_MOVIES, SEARCH_MOVIE, UPCOM_MOVIES} from "./types";
import axios from "axios";

export const searchMovie=text=>dispatch=>{
    dispatch({
        type:SEARCH_MOVIE,
        payload:text
    })
};

export const fetchMovies=text=>dispatch=>{
    axios.post(`http://localhost:5000/search/${text}`)
    .then(res => {dispatch({
        type:FETCH_MOVIES,
        payload:res.data
    })})
    .catch(err => { console.log(err) })
}

export const fetchDetails=id=>dispatch=>{
    axios.post(`http://localhost:5000/detail/${id}`)
    .then(res=>{dispatch({
        type:FETCH_DETAILS,
        payload:res.data
    })})
    .catch(err => { console.log(err) })
}

export const fetchUpcomming=text=>dispatch=>{
    axios.get("http://localhost:5000/list")
        .then(res=>{dispatch({
            type:UPCOM_MOVIES,
            payload:res.data
        })})
        .catch(err=>{console.log(err)})
}

export const setLoading=()=>{
    return {
        type:LOADING
    }
}