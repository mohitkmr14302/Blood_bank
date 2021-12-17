import mongoose from 'mongoose'

const connection = async () => {
    const URL = 'mongodb://Mohit:9qg2hBH.ri84xMN@bloodbank-shard-00-00.cax57.mongodb.net:27017,bloodbank-shard-00-01.cax57.mongodb.net:27017,bloodbank-shard-00-02.cax57.mongodb.net:27017/BLOODBANK?ssl=true&replicaSet=atlas-qyv3cz-shard-0&authSource=admin&retryWrites=true&w=majority';
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
