import express from "express";
import connection from "../config/db.js";
import sqlSring from "sqlstring";

const router = express.Router();

router.get("/detail/:movieId",(req,res)=>{
    const movieId = req.params.movieId;
    let query =sqlSring.format(`SELECT * FROM movie WHERE movieId = ? `,[movieId]);
    
    connection.query(query,(err,result)=>{
        if(err){
            return res.json({
                status:false,
                message:"somting went Wrong",
            });
        }
        return res.json({
            status:true,
            movie:result[0],
          })
    }) 
}),
router.get("/allmovies/",(req,res)=>{
   
    let query = sqlSring.format("SELECT * FROM  movie");
   
    connection.query(query,(err,result)=>{
        if(err){
            return res.json({
                status:false,
                message:"somting went Wrong",
            });
        }
        return res.json({
            status:true,
            movie:result,
          })
    })
})
router.post("/postmovie/",(req,res)=>{
    const yourmovieName = req.body.movieName;
    const yourdirectorName =req.body.directorName;
    const yourgernre = req.body.gernre;
    const yourrunTime =req.body.runTime;
    const yourrating = req.body.rating;
    const yourplot =req.body.plot;


    let query =sqlSring.format("INSERT INTO movie (movieName, directorName, gernre, runTime, rating, plot) VALUES (?, ?, ?, ?, ?, ?)",
    [yourmovieName,yourdirectorName,yourgernre,yourrunTime,yourrating,yourplot]);
    connection.query(query,(err,result)=>{
        if(err){
           console.log(err);

           return res.json({
            status:false,
            message:err.message,
           })
        }
        return res.json({
            status:true,
            message:"data updated"
           })
    })
})

export default router;