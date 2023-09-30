var express = require("express");
var router = express.Router();
const pool = require("./pool");
const upload = require("./multer");

router.post("/bill_submit", function (req, res, next) {
  pool.query(
    "insert into billing(billtime, billdate, tableno, server, fssai, cnote, gst, billingdetails, totalamount, customername, mobileno)values(?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.billtime,
      req.body.billdate,
      req.body.tableno,
      req.body.server,
      req.body.fssai,
      req.body.cnote,
      req.body.gst,
      req.body.billingdetails,
      req.body.totalamount,
      req.body.customername,
      req.body.mobileno,
    ],
    function (error, result) {
      if (error) {
        console.log("Errorrr", error);
        res.status(200).json({ status: false, message: "Database Error" });
      } else {
        res
          .status(200)
          .json({ status: true, message: "Bill Submitted Successfully" });
      }
    }
  );
});

module.exports = router;
