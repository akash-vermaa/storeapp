import mongoose from "mongoose";

export default async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to database successfully");
    }
    catch(error){
        console.log("Unable to connect to database, "+error.message);
    }
}