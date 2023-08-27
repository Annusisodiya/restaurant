var express = require('express')
var router = express.Router();
var pool = require('./pool');
var upload = require('./multer');

/* GET home page. */
router.get('/fetch_all_category', function(req, res, next) {
    try{
    pool.query("select * from category",function(error,result){
          if(error)
          {
            console.log(error);
            res.status(200).json({message:'Database Error...',data:[],status:false})
          }
          else
          {
            console.log(result);
            res.status(200).json({status:true,message:'success...',data:result})
          }
         })
       }
    catch(e)
    {
      console.log(e);
      res.status(200).json({message:'Server Error...',data:[],status:false})
    }
  });
  
  
  router.post('/fooditem_submit',upload.any(), function(req, res, next) {
    pool.query("insert into fooditems (restaurantid, categoryid, fooditemname, foodtype, ingredients, price, offerprice, icon)values(?,?,?,?,?,?,?,?)",[ req.body.restaurantid,req.body.categoryid,req.body.fooditemname, req.body.foodtype, req.body.ingredients, req.body.price, req.body.offerprice,req.files[0].filename],function(error,result){
    if(error)
    {
        console.log("Errorrr",error);
        res.status(200).json({status:false,message:'Database Error'})
    
    }
    else
    {
        res.status(200).json({status:true,message:'category Added Successfully'})
    }
    
    })
    });
  
  
    router.get('/fetch_all_fooditem',function(req,res){
      pool.query('select F.*, (select C.categoryname from category C where C.categoryid=F.categoryid) as categoryname from fooditems F',function(error,result){
          if(error)
          {
              console.log(error)
              res.status(200).json({status:false,message:'Database Error',data:[]})
          
          }
          else
          {  console.log(result)
              res.status(200).json({status:true,data:result,message:'Fooditems Get Successfully'})
          }
      
      }) 
      })
  
  
      router.post('/fooditem_edit_data',upload.any(), function(req, res, next) {
        pool.query("update fooditems set restaurantid=?, categoryid=?, fooditemname=?, foodtype=?, ingredients=?, price=?, offerprice=? where fooditemid=?",[ req.body.restaurantid,req.body.categoryid,req.body.fooditemname, req.body.foodtype, req.body.ingredients, req.body.price, req.body.offerprice,req.body.fooditemid],function(error,result){
        if(error)
        {
            console.log("Errorrr",error);
            res.status(200).json({status:false,message:'Database Error'})
        
        }
        else
        {
            res.status(200).json({status:true,message:'category Added Successfully'})
        }
        
        })
      });
  
        router.post('/fooditem_edit_icon',upload.any(), function(req, res, next) {
          pool.query("update fooditems set icon=? where fooditemid=?",[ req.files[0].filename,req.body.fooditemid],function(error,result){
          if(error)
          {
              console.log("Errorrr",error,req.body);
              res.status(200).json({status:false,message:'Database Error'})
          
          }
          else
          {
              res.status(200).json({status:true,message:'Icon Updated Successfully'})
          }   
          })
        });
  
        
          router.post('/fooditem_delete',upload.any(), function(req, res, next) {
            pool.query("delete from fooditems where fooditemid=?",[ req.body.fooditemid],function(error,result){
            if(error)
            {
                console.log("Errorrr",error,req.body);
                res.status(200).json({status:false,message:'Database Error'})
            
            }
            else
            {
                res.status(200).json({status:true,message:'food Item Deleted Successfully'})
            }
            
            })
          });
  
  
  
  module.exports = router;