const router=require("express").Router()
const https=require("https")
require('dotenv').config();

const key=process.env.API_KEY


//Movie Details Page
router.route("/:id").post((req, res) => {


    // get details of the movie
    const detailsUrl = `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${key}`
    https.get(detailsUrl, function (response) {
        console.log(response.statusCode)

        var data;
        //collecting all the chunks of data
        response.on("data", function (chunk) {
            if (!data) {
                data = chunk;
            } else {
                data += chunk;
            }
        });

        response.on("end", function () {
            const Details = JSON.parse(data)
            const Poster=Details.poster_path
            const Title = Details.original_title
            const Rating = Details.vote_average
            const releaseData = Details.release_date
            const length = Details.runtime
            const Description = Details.overview
            // console.log(Title)
            // console.log(Rating)
            // console.log(releaseData)
            // console.log(length)
            // console.log(Description)


            //get cast and director data
            const creditsUrl = `https://api.themoviedb.org/3/movie/${req.params.id}/credits?api_key=2ee360ce8f2c8558a7907411bf525171`
            https.get(creditsUrl, function (resp) {
                console.log(resp.statusCode)

                var data;
                //collecting all the chunks of data
                resp.on("data", function (chunk) {
                    if (!data) {
                        data = chunk;
                    } else {
                        data += chunk;
                    }
                });

                //parsing the data 
                resp.on("end", function () {
                    const Credits = JSON.parse(data)
                    const Cast = Credits.cast[0].name
                    const Director = Credits.crew[0].name
                    res.json({
                        moviePoster:Poster,
                        movieName:Title,
                        movieRating:Rating,
                        releaseDate:releaseData,
                        movieLength:length,
                        movieDesc:Description,
                        movieCast:Cast,
                        movieDirector:Director
                    })
                })
            })
        })
    })
})


module.exports=router