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

export default router;