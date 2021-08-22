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

export const fetchUpcomming=(data)=>{
    return {
        type:UPCOM_MOVIES,
        payload:data
    };
};


export const setLoading=()=>{
    return {
        type:LOADING
    }
}




// router.route("/").get((req, res) => {
//     let currentPage = 0;
//     let dataUntilNow = [];
//     function loadNextPage(currentPage, dataUntilNow) {
//         currentPage = currentPage + 1;
//         // get movie title,rating,description and image path
//         const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=2ee360ce8f2c8558a7907411bf525171&language=en-US&page=1`
//         https.get(url, function (response) {
//             console.log(response.statusCode)

//             var data;
//             //collecting all the chunks of data
//             response.on("data", function (chunk) {
//                 if (!data) {
//                     data = chunk;
//                 } else {
//                     data += chunk;
//                 }
//             });

//             response.on("end", function () {
//                 const Upcomming = JSON.parse(data)
//                 const upcommingMov = Upcomming.results

//                 if (dataUntilNow !== []) {
//                     dataUntilNow= upcommingMov;
//                 }
//                 else{
//                     dataUntilNow.concat(upcommingMov);
//                 }
//                 res.json(dataUntilNow)
//                 if(currentPage<=Upcomming.total_pages){
//                     loadNextPage(currentPage,dataUntilNow)
//                 }
//                 else{
//                     console.log(dataUntilNow)
//                 }
//             })
//         })
//     }
//     loadNextPage(currentPage, dataUntilNow);
//     res.json(dataUntilNow);
// })