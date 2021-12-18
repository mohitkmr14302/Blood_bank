import mongoose from 'mongoose'

const connection = async () => {
    const URL = process.env.MONGO_URL;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (err) {
        console.log("Error,while connecting MongoDB", err);
    }
}
export default connection;
