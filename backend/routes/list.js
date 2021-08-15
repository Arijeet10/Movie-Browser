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
            const upcommingMov=Upcomming.results
            // const movieTitle = Upcomming.results[0].original_title
            // const movieRating = Upcomming.results[0].vote_average
            // const movieDescription = Upcomming.results[0].overview
            // const movieImage = Upcomming.results[0].backdrop_path
            res.json(upcommingMov)
        })
    })
})



module.exports = router;