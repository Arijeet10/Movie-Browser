const router = require("express").Router()
const https = require("https")

//Movie List Page
router.route("/").get((req, res) => {
    // get movie title,rating,description and image path
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=2ee360ce8f2c8558a7907411bf525171&language=en-US&page=1`
    https.get(url, function (response) {
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
            const Upcomming = JSON.parse(data)
            // const movieTitle = Upcomming.results[0].original_title
            // const movieRating = Upcomming.results[0].vote_average
            // const movieDescription = Upcomming.results[0].overview
            // const movieImage = Upcomming.results[0].backdrop_path
            res.json(Upcomming)
        })
    })
})

//Movie Details Page
router.route("/:id").post((req, res) => {


    // get details of the movie
    const detailsUrl = `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=2ee360ce8f2c8558a7907411bf525171`
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
            // const Title = Details.original_title
            // const Rating = Details.vote_average
            // const releaseData = Details.release_date
            // const length = Details.runtime
            // const Description = Details.overview
            // console.log(Title)
            // console.log(Rating)
            // console.log(releaseData)
            // console.log(length)
            // console.log(Description)


            //get cast and director data
            const creditsUrl = "https://api.themoviedb.org/3/movie/436969/credits?api_key=2ee360ce8f2c8558a7907411bf525171"
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
                        Details,Credits
                    })
                })
                // res.on("creditData",function(creditData){
                //     const Credits=JSON.parse(creditData)
                //     const Cast=Credits.cast[0].name
                //     const Director=Credits.crew[0].name
                //     console.log(Cast)
                //     console.log(Director)
                // })
            })


        })
    })
})

module.exports = router;