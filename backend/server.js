const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());


const list = require("./routes/list.js")
app.use("/list", list)
const detail=require("./routes/details.js")
app.use("/detail",detail)
const search=require("./routes/search.js")
app.use("/search",search)



app.listen("5000", function () {
    console.log("Server running on PORT:5000");
})


