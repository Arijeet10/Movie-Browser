const router = require("express").Router()
const https = require("https")
require('dotenv').config();

const key=process.env.API_KEY

//Movie List Page
router.route("/:pageNo").get((req, res) => {
    // get movie title,rating,description and image path
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${req.params.pageNo}`
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
            res.json(upcommingMov)
        })
    })
})


router.route("/").get((req, res) => {
    // get movie title,rating,description and image path
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
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
            const totalPages=Upcomming.total_pages
            res.json(totalPages)
        })
    })
})



module.exports = router;