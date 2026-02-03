const mongoose = require("mongoose")

const connection = async ()=>{

    try {
      
        const connect = await mongoose.connect("mongodb+srv://vaishnavk3699_db_user:cafecall123@cluster0.fx4x9jr.mongodb.net/?appName=Cluster0")
        console.log("Connection Successfully");
        


    } catch (error) {
        console.log("Connection Error",error);
        process.exit()
        
    }

}

module.exports = connection