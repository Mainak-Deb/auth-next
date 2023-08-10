import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log(">>> Database is running on port 27017");
        });
        connection.on("error", (err) => {
            console.log(">>> Error", err);
            process.exit();
        });

        console.log(">>> Database is connected");
    } catch (error) {
        console.log(">>> Error", error);
    }
    }