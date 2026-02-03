const jwt= require("jsonwebtoken")



const verifytoken = (req,res,next) => {


const getauthorization = req.headers.authorization;





if(!getauthorization){


    return res.status(499).json({message:"Token Required"}) 

}

const gettoken= getauthorization.split(" ")[1];
console.log("gettoken",gettoken);





try {
    const decoded= jwt.verify(process.env.jwt_wb_token)
    req.user=decoded
    next()


} catch (error) {
    console.log(error);
    return res.status(401).json({message:"Incorrect Authorization "})
    
}


}



module.exports=verifytoken