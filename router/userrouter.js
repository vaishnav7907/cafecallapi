const express = require("express");
const { userauthcreate, userlogin } = require("../controller/userauthcontroller");
const verify = require("../middleware/authmiddleware")

const router = express.Router()


router.route("/signup").post(userauthcreate)
router.route("/signin").post(userlogin)



module.exports=router;