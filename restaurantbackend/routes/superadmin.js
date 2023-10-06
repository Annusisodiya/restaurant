var express = require('express');
var router = express.Router();
var pool = require('./pool')
const upload = require('./multer')
var jwt = require("jsonwebtoken");

/* GET home page. */
router.post('/checklogin', function(req, res, next) {
  pool.query('select * from superadmin where emailid=? and password=?',[req.body.emailid,req.body.password],function(error,result){
    if(result.error)
    {console.log('error')
        res.status(200).json({status:false,data:[],message:'Server Error...'})
    }
    else
    {
        if(result.length==1)
        {var token = jwt.sign({ data: result[0] }, "shhhhhh");
        console.log(token);

       res.status(200).json({status:true,data:result[0],message:'Login Successful',token})
        }
        else
        {
            res.status(200).json({status:false,data:[],message:'Invalid Userid/password'})    
        }
    }
    

  })
});

module.exports = router;