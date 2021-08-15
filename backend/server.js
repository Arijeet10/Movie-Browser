const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

//const https = require("https");
// // get movie title,rating,description and image path
// const popularUrl="https://api.themoviedb.org/3/movie/popular?api_key=2ee360ce8f2c8558a7907411bf525171"
// https.get(popularUrl,function(response){
//     console.log(response.statusCode)
//     response.on("data",function(data){
//         const Popular=JSON.parse(data)
//         const movieTitle=Popular.results[0].original_title
//         const movieRating=Popular.results[0].vote_average
//         const movieDescription=Popular.results[0].overview
//         const movieImage=Popular.results[0].backdrop_path
//         // console.log(movieTitle)
//         // console.log(movieRating)
//         // console.log(movieDescription)
//         // console.log(movieImage)
//         console.log(Popular)
//     })
// })

// get details of the movie
// const detailsUrl="https://api.themoviedb.org/3/movie/436969?api_key=2ee360ce8f2c8558a7907411bf525171"
// https.get(detailsUrl,function(response){
//     console.log(response.statusCode)

//     var data;
//     //collecting all the chunks of data
//     response.on("data", function (chunk) {
//         if (!data) {
//             data = chunk;
//         } else {
//             data += chunk;
//         }
//     });

//     response.on("end",function(){
//         const Details=JSON.parse(data)
//         const Title=Details.original_title
//         const Rating=Details.vote_average
//         const releaseData=Details.release_date
//         const length=Details.runtime
//         const Description=Details.overview
//         console.log(Title)
//         console.log(Rating)
//         console.log(releaseData)
//         console.log(length)
//         console.log(Description)
//     })
// })

//get cast and director data
// const creditsUrl = "https://api.themoviedb.org/3/movie/436969/credits?api_key=2ee360ce8f2c8558a7907411bf525171"
// https.get(creditsUrl, function (response) {
//     console.log(response.statusCode)

//     var data;
//     //collecting all the chunks of data
//     response.on("data", function (chunk) {
//         if (!data) {
//             data = chunk;
//         } else {
//             data += chunk;
//         }
//     });

//     //parsing the data 
//     response.on("end", function () {
//         const Credits = JSON.parse(data)
//         const Cast = Credits.cast[0].name
//         const Director = Credits.crew[0].name
//         console.log(Cast)
//         console.log(Director)
//     })
//     // res.on("creditData",function(creditData){
//     //     const Credits=JSON.parse(creditData)
//     //     const Cast=Credits.cast[0].name
//     //     const Director=Credits.crew[0].name
//     //     console.log(Cast)
//     //     console.log(Director)
//     // })
// })





// // get details of the movie
// const detailsUrl = "https://api.themoviedb.org/3/movie/436969?api_key=2ee360ce8f2c8558a7907411bf525171"
// https.get(detailsUrl, function (response) {
//     console.log(response.statusCode)

//     var data;
//     //collecting all the chunks of data
//     response.on("data", function (chunk) {
//         if (!data) {
//             data = chunk;
//         } else {
//             data += chunk;
//         }
//     });

//     response.on("end", function () {
//         const Details = JSON.parse(data)
//         const Title = Details.original_title
//         const Rating = Details.vote_average
//         const releaseData = Details.release_date
//         const length = Details.runtime
//         const Description = Details.overview
//         console.log(Title)
//         console.log(Rating)
//         console.log(releaseData)
//         console.log(length)
//         console.log(Description)

//         //get cast and director data
//         const creditsUrl = "https://api.themoviedb.org/3/movie/436969/credits?api_key=2ee360ce8f2c8558a7907411bf525171"
//         https.get(creditsUrl, function (response) {
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

//             //parsing the data 
//             response.on("end", function () {
//                 const Credits = JSON.parse(data)
//                 const Cast = Credits.cast[0].name
//                 const Director = Credits.crew[0].name
//                 console.log(Cast)
//                 console.log(Director)
//             })
//             // res.on("creditData",function(creditData){
//             //     const Credits=JSON.parse(creditData)
//             //     const Cast=Credits.cast[0].name
//             //     const Director=Credits.crew[0].name
//             //     console.log(Cast)
//             //     console.log(Director)
//             // })
//         })

//     })
// })


























const home = require("./routes/list.js")
app.use("/home", home)




app.listen("5000", function () {
    console.log("Server running on PORT:5000");
})


