const router=require("express").Router()
const https=require("https")

router.route("/:id").post((req,res)=>{
    const url=`https://api.themoviedb.org/3/search/movie?api_key=2ee360ce8f2c8558a7907411bf525171&query=${req.params.id}`
    https.get(url,function(response){
        console.log(response.statusCode)
        var data;
        response.on("data",function(chunk){
            if(!data){
                data=chunk
            }
            else{
                data+=chunk
            }
        })
        response.on("end",function(){
            const searchItems=JSON.parse(data)
            const result=searchItems.results
            res.json(result)
        })
    })
})

module.exports=router