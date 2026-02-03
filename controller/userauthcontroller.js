const modelll = require("../model/userAuthSchema")

const bcrypt = require("bcrypt")
const { log } = require("console")

const jwt = require("jsonwebtoken")

const userauthcreate = async (req, res) => {

    const { Name, Email, Password, Officename } = req.body

    const existingemail = await modelll.findOne({ Email })
    if (existingemail) {
        res.status(409).json("Already Exist")
    }

    else {

        const bcryptt = await bcrypt.hash(Password, 10)





        const userdetails = await modelll.create({
            Name, Email, Password: bcryptt, Officename
        })
        console.log(userdetails);


        res.json({ message: "Success", data: userdetails })



    }

}



const userlogin = async (req, res) => {


    const { Email, Password } = req.body

    const isemailexistlogin = await modelll.findOne({ Email })



    if (!isemailexistlogin) {
        res.status(400).json("Invalid Email")
    }

   
    


    const ispassexistlog = await bcrypt.compare(Password, isemailexistlogin.Password)

    if (!ispassexistlog) {
        res.status(401).json("Invalid Password")
    }


    else {

        const token = jwt.sign(

            // {  userId:isemailexistlogin._id }

            { userId: isemailexistlogin._id },
            process.env.jwt_wb_token,
            { expiresIn: "1hr" }
        )

        res.json({token})

    }

    
    


}




module.exports = { userauthcreate, userlogin }