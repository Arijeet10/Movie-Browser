const express=require("express");
const app=express();

const cors=require("cors");
app.use(cors());

const https=require("https");
const url="https://api.themoviedb.org/3/movie/popular?api_key=2ee360ce8f2c8558a7907411bf525171"
https.get(url,function(response){
    console.log(response.statusCode)
    response.on("data",function(data){
        const Popular=JSON.parse(data)
        const movieTitle=Popular.results[0].original_title
        const movieRating=Popular.results[0].vote_average
        const movieDescription=Popular.results[0].overview
        const movieImage=Popular.results[0].backdrop_path
        console.log(movieTitle)
        console.log(movieRating)
        console.log(movieDescription)
        console.log(movieImage)
    })
})


























app.listen("5000",function(){
    console.log("Server running on PORT:5000");
})


