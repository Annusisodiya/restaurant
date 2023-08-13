var express = require('express');
var router = express.Router();
var pool = require('./pool')
const upload = require('./multer')

/* GET home page. */
router.post('/checklogin', function(req, res, next) {
  pool.query('select * from superadmin where emailid=? and password=?',[req.body.emailid,req.body.password],function(error,result){
    if(result.error)
    {
        res.status(200).json({status:false,data:[],message:'Server Error...'})
    }
    else
    {
        if(result.length==1)
        {

       
        req.status(200).json({status:true,data:result,message:'Login Successful'})
        }
        else
        {
            req.status(200).json({status:true,data:[],message:'Invalid Userid/password'})    
        }
    }
    

  })
});

module.exports = router;