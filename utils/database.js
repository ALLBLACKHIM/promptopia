import mongoose from "mongoose";

let isConnected = false; // tracks the connection

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(isConnected){
        console.log("Database is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
        })

        isConnected = true;

        console.log("Database is already connected");
    } catch (error) {
        console.log(error);
    }
}