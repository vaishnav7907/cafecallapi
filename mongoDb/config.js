const mongoose = require("mongoose")

const connection = async ()=>{

    try {
      
        const connect = await mongoose.connect(process.env.mongouri)
        console.log("Connection Successfully");
        


    } catch (error) {
        console.log("Connection Error",error);
        process.exit()
        
    }

}

module.exports = connection