const router = require("express").Router()
const https = require("https")
// const axios = require('axios');

// var count = 1; 
// let data =[];

// // with single promise call each time in secuence.
// function getMovieTitles(data,callback){
//     let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=2ee360ce8f2c8558a7907411bf525171&language=en-US&page=${count}`;
//     console.log(url);
//     axios.get(url)
//     .then(response => {
//     if(response.data.data.length == 0){
//         callback(data);
//     }
//     else{
//         count++;
//         getMovieTitles(data.concat(response.data.data.map(data => data.Title)),callback);
//     }
//     });
// };

// router.route("/").get((req,res)=>{
//     getMovieTitles(data,function(data){
//         res.json(data)
//     });
// })
























// router.route("/").get((req, res) => {
//     let currentPage = 1;
//     let dataUntilNow = [];
//     function loadNextPage(currentPage, dataUntilNow) {
//         // get movie title,rating,description and image path
//         const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=2ee360ce8f2c8558a7907411bf525171&language=en-US&page=${currentPage}`
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
//                 if(currentPage<=Upcomming.total_pages){
//                     loadNextPage(currentPage++,dataUntilNow)
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


















//Movie List Page
// router.route("/").get((req, res) => {

//     let currentPage = 0;
//     let dataUntilNow = [];


//     function loadNextPage(currentPage, dataUntilNow) {
//         currentPage = currentPage + 1;
//         // get movie title,rating,description and image path
//         const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=2ee360ce8f2c8558a7907411bf525171&language=en-US&page=${currentPage}`
//         https.get(url, function (response) {
//             console.log(response.statusCode)

//             var rawData;
//             //collecting all the chunks of data
//             response.on("data", function (chunk) {
//                 if (!rawData) {
//                     rawData = chunk;
//                 } else {
//                     rawData += chunk;
//                 }
//             });

//             response.on("end", function () {
//                 const Upcomming = JSON.parse(rawData)
//                 const upcommingMov = Upcomming.results
//                 if (dataUntilNow !== []) {
//                     dataUntilNow += upcommingMov;
//                 }
//                 const parsedPage = parseInt(Upcomming.page)
//                 if (!isNaN(parsedPage) && typeof Upcomming.total_pages === 'number' && parsedPage < Upcomming.total_pages) {
//                     loadNextPage();
//                 }
//                 else {
//                     console.log(dataUntilNow)
//                 }

//             })
//         })
//     }
//     loadNextPage(currentPage, dataUntilNow);
//     res.json(dataUntilNow)
// })

// Movie List Page
// router.route("/").get((req, res) => {
//     let currPage = 0;
//     let totalPages = 0;
//     let dataUntilNow=[];

//     // get movie title,rating,description and image path
//     const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=2ee360ce8f2c8558a7907411bf525171&language=en-US&page=1`
//     https.get(url, function (response) {
//         console.log(response.statusCode)

//         var data;
//         //collecting all the chunks of data
//         response.on("data", function (chunk) {
//             if (!data) {
//                 data = chunk;
//             } else {
//                 data += chunk;
//             }
//         });

//         response.on("end", function () {
//             const Upcomming = JSON.parse(data)
//             totalPages = Number(Upcomming.total_pages)
//         })
//     })

//     while (currPage<=totalPages) {
//         currPage++;
//         // get movie title,rating,description and image path
//         const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=2ee360ce8f2c8558a7907411bf525171&language=en-US&page=${currPage}`
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
//                 const upcommingMov=Upcomming.results
//                 dataUntilNow.concat(upcommingMov)
//             })
//         })
//     }
//     res.json(dataUntilNow)
// })


//Movie List Page
router.route("/:pageNo").get((req, res) => {
    // get movie title,rating,description and image path
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=2ee360ce8f2c8558a7907411bf525171&language=en-US&page=${req.params.pageNo}`
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
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=2ee360ce8f2c8558a7907411bf525171`
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